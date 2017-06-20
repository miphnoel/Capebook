class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.sring :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :dob, null: false
      t.string :gender, null: false

      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
