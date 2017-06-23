# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  password_digest       :string           not null
#  session_token         :string           not null
#  email                 :string           not null
#  first_name            :string           not null
#  last_name             :string           not null
#  dob                   :date             not null
#  alignment             :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  prof_pic_file_name    :string
#  prof_pic_content_type :string
#  prof_pic_file_size    :integer
#  prof_pic_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
