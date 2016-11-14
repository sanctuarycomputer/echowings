class HomeController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
  end

  def debug
    @twitter_users = TwitterUser.where("tweets_count > ?", 9)
  end
end
