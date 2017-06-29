json.array! @requests do |request|
  json.id request.id
  json.sender_id request.sender_id
  json.sender_name request.sender.full_name
  json.thumb request.sender.prof_pic
end
