# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161113221909) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "scrapes", force: :cascade do |t|
    t.bigint   "max_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tweets", force: :cascade do |t|
    t.integer  "twitter_user_id"
    t.string   "twitter_tweet_id"
    t.string   "text"
    t.integer  "sentiment"
    t.decimal  "probability"
    t.datetime "posted_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["twitter_tweet_id"], name: "index_tweets_on_twitter_tweet_id", unique: true, using: :btree
    t.index ["twitter_user_id"], name: "index_tweets_on_twitter_user_id", using: :btree
  end

  create_table "twitter_users", force: :cascade do |t|
    t.string   "twitter_user_id"
    t.string   "twitter_screen_name"
    t.string   "twitter_name"
    t.string   "twitter_description"
    t.string   "twitter_profile_image_url"
    t.integer  "overall_sentiment"
    t.decimal  "overall_probability"
    t.integer  "tweets_count"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.index ["twitter_user_id"], name: "index_twitter_users_on_twitter_user_id", unique: true, using: :btree
  end

  create_table "wings", force: :cascade do |t|
    t.string   "email"
    t.integer  "polarity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_wings_on_email", unique: true, using: :btree
  end

  add_foreign_key "tweets", "twitter_users"
end
