class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      render :show
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.author_id != current_user.id
      render json: "cannot edit others' comments", status: 401
    elsif @comment.update(comment_params)
      render :show
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id
       @comment.destroy
        render json: @comment.id
    else
      render json: "cannot delete others' comments", status: 401
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:parent_id, :body)
  end
end
