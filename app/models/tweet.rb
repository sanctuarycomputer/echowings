class Tweet < ApplicationRecord
  belongs_to :twitter_user, counter_cache: true

  enum sentiment: {
    neutral: 0,
    negative: 1,
    positive: 2
  }

  after_save -> {
    self.twitter_user.update_overall_sentiment_and_probability
  }
end
