class CreateTwitterUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :twitter_users do |t|
      t.string :twitter_user_id
      t.string :twitter_screen_name
      t.integer :overall_sentiment
      t.decimal :overall_probability
      t.integer :tweets_count
      t.timestamps
    end
    add_index :twitter_users, :twitter_user_id, unique: true
  end
end
