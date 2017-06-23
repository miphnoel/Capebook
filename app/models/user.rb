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

class User < ApplicationRecord
  has_attached_file :prof_pic, default_url: "missing.png"

  validates_attachment_content_type :prof_pic,
                                    content_type: /^image\/(png|jpeg)/,
                                    message: 'only .png or .jpeg'

  validates_presence_of :session_token, :password_digest, :email,
                        :first_name, :last_name, :dob, :alignment
  validates_uniqueness_of :session_token, :email
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :alignment, inclusion: { in: ['hero', 'villain']}

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
