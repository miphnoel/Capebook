json.postIds do
  json.array! @posts.ids.uniq
end

@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
  end
end
