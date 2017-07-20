class Api::FriendshipsController < ApplicationController

  def index
    @user = current_user
    @requests = @user.pending_friendships.includes(:sender)
  end

  def show
    @status = status_as_int

    if @friendship
      render :show
    else
      render json: { status: @status }
    end
  end

  def create
    @friendship = Friendship.new(
      sender_id: current_user.id,
      receiver_id: params[:user_id])

    if @friendship.save
      @status = 1;
      render 'api/friendships/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.receiver_id == current_user.id && @friendship.update(friendship_params)
      @status = status_as_int
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
    params.require(:friendship).permit(:status)
  end

  def find_friendship_by_user_ids(ids)
    @friendship = Friendship.where(sender_id: ids, receiver_id: ids).first
  end

  # translate [ pending, approved, denied ] into
  # [ self, no_connection, sent_request, received_request, friends, blocked, blocker]
  def status_as_int
    shown_user_id = params[:id].to_i
    current_user_id = current_user.id

    return -1 if shown_user_id == current_user_id

    @friendship ||= find_friendship_by_user_ids([shown_user_id, current_user_id])

    return 0 unless @friendship

    case @friendship.status
    when "pending"
      return 1 if current_user_id == @friendship.sender_id
      return 2
    when "approved"
      return 3
    when "denied"
      return 4 if current_user_id == @friendship.sender_id
      return 5
    end
  end
end
