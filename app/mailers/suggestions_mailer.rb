class SuggestionsMailer < ActionMailer::Base
  default from: 'hello@echowings.org'

  def send_suggestions(wing)
    case wing.polarity.to_sym
    when :left
      # Left Wings want suggestions for people who reacted Positively
      @suggestions = TwitterUser.positive.where("tweets_count > ?", 9).order("RANDOM()").limit(5)
    when :right
      # Right Wings want suggestions for people who reacted Negatively
      @suggestions = TwitterUser.negative.where("tweets_count > ?", 9).order("RANDOM()").limit(5)
    when :middle
      @suggestions = TwitterUser.where("tweets_count > ?", 9).order("RANDOM()").limit(5)
    end
    mail(to: wing.email, subject: "Echowings: Let's understand our country!")
  end
end
