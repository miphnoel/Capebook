# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  job        :string
#  workplace  :string
#  education  :string
#  location   :string
#  hometown   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord
  validates_presence_of :user
  belongs_to :user
end
