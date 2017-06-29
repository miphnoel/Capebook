json.extract! @user, :id, :email, :first_name, :last_name, :dob, :alignment
json.join_date @user.created_at.strftime("%B %Y")
json.prof_pic asset_path(@user.prof_pic.url)
json.cover_pic asset_path(@user.cover_pic.url)
json.friendship do
  json.id (@current_friendship ? @current_friendship.id : -1)
  json.status @status
end
json.profile do
  json.partial! 'api/profile/profile', profile: @user.profile
end
json.posts do
  json.partial! 'api/posts/post', collection: @posts, as: :post
end
