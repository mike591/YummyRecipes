class Api::UsersController < ApplicationController

  def create
    @user = User.find_by(email: params[:user][:email]) || User.create(user_params)
    log_in(@user)
    render :show
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render @user.errors.full_messages, status: 400
    end
  end

  def log_out
    sign_out
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :bio)
  end
end
