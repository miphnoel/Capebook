class User < ApplicationRecord
  validates_presence_of :session_token, :password_digest, :email,
                        :first_name, :last_name, :dob, :gender
  validates_uniqueness_of :session_token, :email
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(pw)
    @password = pw
    self.password_digest = generate_session_token
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
    self.password_digest ||= generate_session_token
  end

end
