SENTIMENT_MAP = {
  ":)" => :positive,
  ":(" => :negative,
  ":|" => :neutral
}

class Echowings::Scraper
  class << self
    def perform
      # Get newest Scrape
      scrape = Scrape.order("created_at").last

      # Load 100 Tweets mentioning Term
      tweets = if scrape
                 client.search("#{term} #{query_tail}", max_id: scrape.max_id, lang: "en", count: 100)
               else
                 client.search("#{term} #{query_tail}", lang: "en", count: 100)
               end

      # Create a Scrape Record
      Scrape.create! max_id: tweets.attrs[:search_metadata][:max_id]

      tweets.each do |tweet|
        twitter_user = TwitterUser.where(twitter_user_id: tweet.user.id, twitter_screen_name: tweet.user.screen_name).first_or_create
        # Get more Tweets from that User
        client.search("from:#{tweet.user.screen_name} AND #{query_tail}", count: 100).each do |tweet|
          # Ensure Twitter User record exists
          # Build Tweets!
          new_tweet = Tweet.where({
            posted_at: tweet.created_at,
            text: tweet.text,
            twitter_user: twitter_user,
            twitter_tweet_id: tweet.id
          }).first_or_initialize

          # Persist w/ Sentiment Data
          process_tweet new_tweet
        end
      end
    end

    def process_tweet(tweet)
      result = analyzer.process tweet.text
      tweet.probability = result.overall_probability
      tweet.sentiment = SENTIMENT_MAP[result.sentiment]
      tweet.save
    end

    private

    def analyzer
      @analyzer ||= Echowings::Analyzer.new
    end

    def client
      @client ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = Rails.application.secrets[:twitter_consumer_key]
        config.consumer_secret     = Rails.application.secrets[:twitter_consumer_secret]
        config.access_token        = Rails.application.secrets[:twitter_access_token]
        config.access_token_secret = Rails.application.secrets[:twitter_access_token_secret]
      end
    end

    def term
      "america"
    end

    def query_tail
      "since:2016-11-09 AND until:2016-11-10 AND -filter:retweets AND -filter:replies AND -filter:links"
    end
  end
end
