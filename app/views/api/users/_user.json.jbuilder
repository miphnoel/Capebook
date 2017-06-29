json.extract! user, :id, :first_name, :last_name
json.prof_pic asset_path(user.prof_pic.url)
