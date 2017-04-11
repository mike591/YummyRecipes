class User < ApplicationRecord
  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= User.generate_token
  end

  def self.generate_token
    SecureRandom.urlsafe_base64()
  end

  def reset_token!
    self.session_token = User.generate_token
    self.save
    self.session_token
  end
end
