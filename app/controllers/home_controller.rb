class HomeController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :wings

  def index
    if unsubscribe_email.present?
      Wing.where(email: unsubscribe_email).destroy_all
      @props = { totalTweets: Tweet.count, didUnsubscribe: true }
    else
      @props = { totalTweets: Tweet.count, didUnsubscribe: false }
    end
  end

  def debug
    @twitter_users = TwitterUser.where("tweets_count > ?", 9)
  end

  def wings
    wing = Wing.create email: params[:email], polarity: params[:polarity].to_sym
    if wing.persisted?
      SuggestionsMailer.send_welcome(wing).deliver
      render json: { status: :ok }
    else
      render json: { errors: wing.errors }, status: 422
    end
  end

  def letsencrypt
    render plain: Rails.application.secrets[:letsencrypt_challenge]
  end

  private
  def wings_params
    params.require(:home).permit(:email, :polarity)
  end

  def unsubscribe_email
    params['unsubscribe']
  end
end
