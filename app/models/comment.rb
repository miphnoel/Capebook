class Comment < ApplicationRecord
  validates_presence_of :parent, :author, :body

  belongs_to :author, class_name: :User
  belongs_to :parent, class_name: :Post
end
