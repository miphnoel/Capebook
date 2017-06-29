class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :parent_id, null: false
      t.text :body, null: false

      t.timestamps
    end
      add_index :comments, :author_id
      add_index :comments, :parent_id
  end
end
