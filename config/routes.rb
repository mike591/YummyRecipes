Rails.application.routes.draw do
  root to: 'static_pages#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:create, :update, :show]
  end
end
