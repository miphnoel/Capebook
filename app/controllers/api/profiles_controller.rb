class Api::ProfilesController < ApplicationController
  before_action :set_profile

  def show

  end

  def update
    if @profile.update(profile_params)
      render 'api/users/show'
    else
      render @profile.errors.full_messages, status: 422
    end
  end

  private

  def set_profile
    @user = User.find(params[:user_id])
    @profile = @user.profile
  end

  def profile_params
    params.require(:profile).permit(:job, :workplace, :education, :location, :hometown)
  end
end
