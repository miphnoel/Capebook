json.extract! comment, :id, :parent_id, :author_id, :body
json.author_name comment.author.full_name
json.author_pic comment.author.prof_pic
json.time_string comment.created_at.strftime("%B %-d at %l:%M%P")
