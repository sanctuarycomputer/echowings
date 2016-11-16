class HomeController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :wings

  def index
    @hello_world_props = { name: "Stranger" }
  end

  def debug
    @twitter_users = TwitterUser.where("tweets_count > ?", 9)
  end

  def wings
    wing = Wing.create email: params[:email], polarity: params[:polarity].to_sym
    if wing.persisted?
      render json: { status: :ok }
    else
      render json: { errors: wing.errors }, status: 422
    end
  end

  def wings_params
    params.require(:home).permit(:email, :polarity)
  end
end
