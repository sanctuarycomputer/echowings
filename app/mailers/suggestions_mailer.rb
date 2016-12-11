class SuggestionsMailer < ActionMailer::Base
  default from: 'Echowings <hello@echowings.org>'
  include Roadie::Rails::Automatic

  def send_suggestions(wing)
    suggestion_count = 5
    case wing.polarity.to_sym
    when :left
      # Left Wings want suggestions for people who reacted Positively
      @suggestions = TwitterUser.positive.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    when :right
      # Right Wings want suggestions for people who reacted Negatively
      @suggestions = TwitterUser.negative.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    when :middle
      @suggestions = TwitterUser.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    end
    @wing = wing
    mail(to: wing.email, subject: "Echowings: Getting to know America")
  end

  def send_welcome(wing)
    suggestion_count = 3
    case wing.polarity.to_sym
    when :left
      # Left Wings want suggestions for people who reacted Positively
      @suggestions = TwitterUser.positive.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    when :right
      # Right Wings want suggestions for people who reacted Negatively
      @suggestions = TwitterUser.negative.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    when :middle
      @suggestions = TwitterUser.where("tweets_count > ?", 9).order("RANDOM()").limit(suggestion_count)
    end
    @wing = wing
    mail(to: wing.email, subject: "Welcome to Echowings!")
  end
end
