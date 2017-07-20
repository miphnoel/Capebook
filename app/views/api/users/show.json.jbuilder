json.extract! @user, :id, :email, :first_name, :last_name, :alignment
json.dob @user.dob.strftime("%B %-d, %Y")
json.join_date @user.created_at.strftime("%B %Y")
json.prof_pic asset_path(@user.prof_pic.url)
json.cover_pic asset_path(@user.cover_pic.url)
json.friendship_status @friendship_status

json.profile do
  json.partial! 'api/profile/profile', profile: @user.profile
end
json.posts do
  json.partial! 'api/posts/post', collection: @posts, as: :post
end
