namespace :echowings do
  desc "Deliver SuggestionsMailer to Wings"
  task deliver: :environment do
    Wing.all.each do |wing|
      SuggestionsMailer.send_suggestions(wing).deliver
    end
  end
end
