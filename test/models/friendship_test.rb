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

require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
