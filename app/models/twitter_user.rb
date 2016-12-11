class TwitterUser < ApplicationRecord
  has_many :tweets

  enum overall_sentiment: {
    neutral: 0,
    negative: 1,
    positive: 2
  }

  def update_overall_sentiment_and_probability
    self.overall_sentiment = tweets.map(&:sentiment).group_by{|i| i}.max{|x,y| x[1].length <=> y[1].length}[0].to_sym
    self.overall_probability = (tweets.map(&:probability).reduce(:+) / tweets.count)
    self.save
  end

  def display_percentage
    (overall_probability * 100).to_int
  end

  def display_image
    twitter_profile_image_url.split("_normal.").join('.')
  end

  def display_polarity
    case overall_sentiment.to_sym
    when :neutral
      "Independent"
    when :negative
      "Left-wing Liberal"
    when :positive
      "Right-wing Conservative"
    end
  end

  def polarity_email_class
    case overall_sentiment.to_sym
    when :neutral
      "neutral"
    when :negative
      "blue"
    when :positive
      "red"
    end
  end
end
