class Profile < ApplicationRecord
  validates_presence_of :user
  belongs_to :user
end
