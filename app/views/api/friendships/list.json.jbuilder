@friends.each do |friend|
  current_user_friendship = @status_hash[friend.id]
  if current_user_friendship
    status, friendship_id = current_user_friendship
  else
    status, friendship_id = [0, 0]
  end

  json.set! friend.id do
    json.partial! 'api/users/user', user: friend
    json.status status
    json.friendship_id friendship_id
  end
end
