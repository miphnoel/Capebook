Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index] do
      resource :profile, only: [:show, :update]
      resources :friendships, only: [:create, :update]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:index, :show, :destroy]
    get 'users/:id/friends', to: 'users#friends', as: 'friends'
  end
end
