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
end
