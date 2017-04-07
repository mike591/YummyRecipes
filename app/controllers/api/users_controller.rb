class Api::UsersController < ApplicationController

  # TODO: add session token, then test.

  def create
    @user = User.find_by(email: params[:email]) || User.create(user_params)
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

  private
  def user_params
    params.require(:user).permit(:name, :email, :bio)
  end
end
