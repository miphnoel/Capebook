class Api::UsersController < ApplicationController
  before_action :set_user, only: [:posts, :friends, :show, :update, :destroy]
  before_action :require_proper_user, only: [:update, :destroy]

  def index
    @users = User.search_by_full_name(params[:query])
  end

  def friends
    @users = @user.friends
    render :index
  end

  def show
    @friendship_status = @user.friendships.where(
      "sender_id = #{current_user.id} OR receiver_id = #{current_user.id}")
      .pluck(:status)
      .first
    @posts = @user.posts.includes(comments: :author)
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show, status: :created
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if @user.update(picture_params)
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    head :no_content
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def require_proper_user
    if current_user.id != @user.id
      render json: "You villain! Hands off profiles that aren't yours!"
    end
  end

  def user_params
    params.require(:user).permit(
      :email, :password, :first_name, :last_name, :dob, :alignment,
    )
  end

  def picture_params
    params.require(:user).permit(:prof_pic, :cover_pic)
  end
end
