class Api::FriendshipsController < ApplicationController

  def index
    @user = current_user
    @requests = @user.pending_friendships.includes(:sender)
  end

  def show
    user_id = params[:id].to_i
    if user_id == current_user.id
      @status = -1
    else
      @friendship = find_friendships_by_user_ids(user_id).first
      @status = status_as_int(@friendship)
    end

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
      @status = status_as_int(@friendship)
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

  def friends_list
    user = User.find(params[:id]).includes(:friends)
    @friends = user.friends.includes(:id)
    @status_hash = {}

    friendships = find_friendships_by_user_ids(@friends.ids)
    friendships.each do |friendship|
      ids = [friendship.sender_id, friendship.receiver_id]
      other_user_id = ids.find {|id| id != current_user.id}
      @status_hash[other_user_id] = [status_as_int(friendship), friendship.id]
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:status)
  end

  def find_friendships_by_user_ids(ids)
    Friendship.where(sender_id: current_user.id, receiver_id: ids)
      .or(Friendship.where(receiver_id: current_user.id, sender_id: ids))
  end

  # translate [ pending, approved, denied ] into
  # [ self, no_connection, sent_request, received_request, friends, blocked, blocker]
  def status_as_int(friendship)
    return 0 unless friendship

    case friendship.status
    when "pending"
      return 1 if current_user.id == friendship.sender_id
      return 2
    when "approved"
      return 3
    when "denied"
      return 4 if current_user.id == friendship.sender_id
      return 5
    end
  end
end
