json.extract! post, :id, :author_id, :recipient_id, :body
json.author_name post.author.full_name
json.recipient_name post.recipient.full_name
json.author_pic post.author.prof_pic
json.time_string post.created_at.strftime("%B %-d at %l:%M%P")

json.comments do
  json.commentIds do
    json.array! post.comments.ids
  end

  json.entities do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
