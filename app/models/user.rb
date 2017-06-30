# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  password_digest        :string           not null
#  session_token          :string           not null
#  email                  :string           not null
#  first_name             :string           not null
#  last_name              :string           not null
#  dob                    :date             not null
#  alignment              :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  prof_pic_file_name     :string
#  prof_pic_content_type  :string
#  prof_pic_file_size     :integer
#  prof_pic_updated_at    :datetime
#  cover_pic_file_name    :string
#  cover_pic_content_type :string
#  cover_pic_file_size    :integer
#  cover_pic_updated_at   :datetime
#

class User < ApplicationRecord
  has_attached_file :prof_pic, default_url: "missing.jpg"
  has_attached_file :cover_pic, default_url: "default_cover.jpg"
  validates_attachment_content_type :prof_pic, content_type: /\Aimage\/.*\Z/

  validates_presence_of :session_token, :password_digest, :email,
                        :first_name, :last_name, :dob, :alignment
  validates_uniqueness_of :session_token, :email
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :alignment, inclusion: { in: ['Hero', 'Villain']}

  has_one :profile, dependent: :destroy

  has_many :sent_requests,
    class_name: :Friendship,
    foreign_key: :sender_id,
    dependent: :destroy

  has_many :received_requests,
    class_name: :Friendship,
    foreign_key: :receiver_id,
    dependent: :destroy

  has_many :requested_friends, through: :sent_requests, source: :receiver
  has_many :received_friends, through: :received_requests, source: :sender

  has_many :authored_posts, foreign_key: :author_id, class_name: :Post
  has_many :received_posts, foreign_key: :receipient_id, class_name: :Post
  has_many :comments, foreign_key: :author_id, dependent: :destroy

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_profile

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

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def friendships
    Friendship.where("sender_id = #{id} OR receiver_id = #{id}")
  end

  def posts
    Post.where("author_id = #{id} OR recipient_id = #{id}")
  end

  def pending_friendships
    friendships.where(status: "pending", receiver_id: self.id)
  end

  def blocked_friendships
    friendships.where(status: "blocked")
  end

  def friend_ids
    # friendships.select(
    # "CASE WHEN sender_id = #{id} THEN receiver_id
    # ELSE sender_id
    # END").where(status: "approved")

    friendships.where(status: "approved").
    pluck(:sender_id, :receiver_id).flatten.reject {|id| id == self.id}
  end

  def friends
    # User.joins("INNER JOIN friendships ON friendships.sender_id = users.id")
    #     .joins("INNER JOIN users AS friends ON friendships.receiver_id = friends.id")
    #     .where("users.id = #{id} OR friends.id = #{id} AND friendships.status = 1")
        # .select("CASE WHEN users.id = #{id} THEN friends.*
        #          ELSE users.* END")

      User.where(id: friend_ids)
  end

  def create_profile
    Profile.create(
      user_id: self.id,
      job: '',
      workplace: '',
      education: '',
      location: '',
      hometown: '' )
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
