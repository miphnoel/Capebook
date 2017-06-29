@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
    json.author_name post.recipient.full_name
    json.recipient_name post.recipient.full_name
  end
end
