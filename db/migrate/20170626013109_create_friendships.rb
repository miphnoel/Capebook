class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.integer :status, null: false, default: 0
      t.timestamps
    end

    add_index :friendships, [:sender_id, :receiver_id], unique: true
    add_index :friendships, [:receiver_id, :sender_id], unique: true
  end
end
