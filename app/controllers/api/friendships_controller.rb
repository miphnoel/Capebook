class Api::FriendshipsController < ApplicationController

  def index
    @user = current_user
    @requests = @user.pending_friendships.includes(:sender)
  end

  def show
    if params[:id] == -1
      friendship = {id: -1, status: -1}
      render json: friendship;
    else
      @friendship = Friendship.find(params[:id])
      render :show
    end
  end

  def create
    @friendship = Friendship.new(
      sender_id: current_user.id,
      receiver_id: params[:user_id])

    if @friendship.save
      render 'api/friendships/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    if friendship_params[sender_id]
      @friendship = Friendship.where(
        sender_id: friendship_params[sender_id],
        receiver_id: current_user.id
        )
    else
      @friendship = Friendship.find(params[:id])
    end

    if @friendship.receiver_id == current_user.id && @friendship.update(friendship_params)
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    if @friendship.sender_id == current_user.id || @friendship.receiver_id == current_user.id
      @friendship.destroy
      render json: @friendship.id
    else
      render json: "cannot destroy others' friendships", status: 401
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:status, :sender_id)
  end
end
