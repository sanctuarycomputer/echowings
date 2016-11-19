namespace :echowings do
  desc "Deliver SuggestionsMailer to Wings"
  task deliver: :environment do
    Wing.all.each do |wing|
      SuggestionsMailer.send_suggestions(wing).deliver
    end
  end

  desc "Scrape next page of tweets"
  task scrape: :environment do
    Echowings::Scraper.perform
  end
end
