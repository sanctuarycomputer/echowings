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
      # Get the latest tweets mentioning America in English
      tweets = if scrape
                 client.search("#{term}&#{query_tail}", lang: 'en', since_id: scrape.max_id, count: 90)
               else
                 client.search("#{term}&#{query_tail}", lang: 'en', count: 90)
               end

      return if tweets.attrs[:statuses].empty?
      # Create a Scrape Record
      Scrape.create! max_id: tweets.attrs[:statuses].first[:id]

      tweets.attrs[:statuses].each do |tweet|
        # Ensure User exists
        twitter_user = TwitterUser.where({
          twitter_user_id:           tweet[:user][:id],
          twitter_screen_name:       tweet[:user][:screen_name],
          twitter_name:              tweet[:user][:name],
          twitter_description:       tweet[:user][:description],
          twitter_profile_image_url: tweet[:user][:profile_image_url_https]
        }).first_or_create

        post_election_tweets_for_screen_name(twitter_user.twitter_screen_name).each do |tweet|
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

    def post_election_tweets_for_screen_name(screen_name)
      # 100 points for whoever tidies this up
      election_announced = DateTime.parse("Wed, 09 Nov 2016 02:45:00 EST -05:00")
      a_day_later        = election_announced + 1.day
      user_tweets        = []
      max_id             = nil
      cycles             = 0

      while true do
        break if cycles > 15 # 3200 tweets dividied by 200

        new_page = if max_id
                      client.user_timeline(screen_name, {
                        max_id: max_id,
                        count: 200,
                        exclude_replies: true,
                        include_rts: false
                      })
                    else
                      client.user_timeline(screen_name, {
                        count: 200,
                        exclude_replies: true,
                        include_rts: false
                      })
                    end

        break if new_page.empty?
        new_tweets_in_window = new_page.select{ |tweet| tweet.created_at > election_announced && tweet.created_at < a_day_later }
        user_tweets.concat new_tweets_in_window
        break if new_page.any?{ |tweet| tweet.created_at < election_announced }
        max_id = new_page.last.id - 1
        cycles += 1
      end
      user_tweets
    end

    def term
      "america"
    end

    def query_tail
      "-filter:retweets&-filter:replies&-filter:links"
    end
  end
end
