class CreateWings < ActiveRecord::Migration[5.0]
  def change
    create_table :wings do |t|
      t.string :email
      t.integer :polarity

      t.timestamps
    end
    add_index :wings, :email, unique: true
  end
end
