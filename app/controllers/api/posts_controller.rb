class Api::PostsController < ApplicationController


  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      @post.includes(:author)
      render :show
    else
      render @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.author_id != current_user.id
      render json: "cannot edit others' posts", status: 401
    elsif @post.update(post_params)
      render :show
    else
      render @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if (@post.author_id == current_user.id ||
       @post.recipient_id == current_user) &&
       @post.destroy
        render json: @post.id
    else
      render json: "cannot delete others' posts", status: 401
    end
  end

  def timeline
    @user = User.find(params[:id])

    @posts = Post
      .where(recipient_id: @user.id)
      .includes(:author, :recipient, :comments)
      .order(created_at: :desc)
  end

  private

  def post_params
    params.require(:post).permit(:recipient_id, :body)
  end
end
