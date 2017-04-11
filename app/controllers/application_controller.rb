class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def log_in(user)
    session[:session_token] = user.session_token
  end

  def sign_out
    @user = current_user
    @user.reset_token!
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    @user = User.find_by(session_token: session[:session_token])
  end

end
