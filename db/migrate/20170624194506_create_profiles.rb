class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :job
      t.string :workplace
      t.string :education
      t.string :location
      t.string :hometown

      t.timestamps
    end
  end
end
