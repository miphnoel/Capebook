json.extract! @user, :id, :email, :first_name, :last_name, :dob, :alignment
json.prof_pic asset_path(@user.prof_pic.url(:original))
json.cover_pic asset_path(@user.cover_pic.url(:original))
