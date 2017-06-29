class Post < ApplicationRecord
  validates_presence_of :author, :recipient, :body

  belongs_to :author, class_name: :User
  belongs_to :recipient, class_name: :User
  has_many :comments
end
