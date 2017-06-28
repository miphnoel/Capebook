# == Schema Information
#
# Table name: friendships
#
#  id           :integer          not null, primary key
#  sender_id :integer          not null
#  receiver_id :integer          not null
#  status       :string           default("pending"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Friendship < ApplicationRecord
  belongs_to :sender, class_name: :User, foreign_key: :sender_id
  belongs_to :receiver, class_name: :User, foreign_key: :receiver_id

  validates_presence_of :sender, :receiver
  validate :bidirectional_uniqueness, on: :create
  validate :cannot_friend_self

  enum status: [ :pending, :approved, :denied ]
  validates :status, inclusion: { in: ["pending", "approved", "denied"] }

  private

  def cannot_friend_self
    if sender_id == receiver_id
      errors.add(:sender_id, "cannot friend self")
    end
  end

  def bidirectional_uniqueness
    if (Friendship.where(sender_id: sender_id, receiver_id: receiver_id).exists? ||
      Friendship.where(sender_id: receiver_id, receiver_id: sender_id).exists?)
      errors.add(:sender_id, "cannot create duplicate friendship")
    end
  end
end
