class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.belongs_to :twitter_user, foreign_key: true
      t.string :twitter_tweet_id
      t.string :text
      t.integer :sentiment
      t.decimal :probability
      t.datetime :posted_at
      t.timestamps
    end
    add_index :tweets, :twitter_tweet_id, unique: true
  end
end
