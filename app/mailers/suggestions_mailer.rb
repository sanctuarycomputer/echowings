class SuggestionsMailer < ApplicationMailer
  def send_suggestions(wing)
    case wing.polarity
    when :left
      # Left Wings want suggestions for people who reacted Positively
      @suggestions = TwitterUser.positive.where("tweets_count > ?", 9).order("RANDOM()")limit(5)
    when :right
      # Right Wings want suggestions for people who reacted Negatively
      @suggestions = TwitterUser.negative.where("tweets_count > ?", 9).order("RANDOM()")limit(5)
    end
    mail({
      to: wing.email,
      subject: 'Thanks for signing up for our amazing app'
    })
  end
end
