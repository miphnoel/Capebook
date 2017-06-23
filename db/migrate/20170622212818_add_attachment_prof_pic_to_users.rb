class AddAttachmentProfPicToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :prof_pic
    end
  end

  def self.down
    remove_attachment :users, :prof_pic
  end
end
