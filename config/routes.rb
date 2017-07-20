Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index] do
      resource :profile, only: [:show, :update]
      resources :friendships, only: [:create, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:index, :show, :update, :destroy]
    resources :posts, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :update, :destroy]
    get 'users/:id/friends', to: 'users#friends', as: 'friends'
    get 'timeline/:id', to: 'posts#timeline', as: 'timeline'
    get 'newsfeed', to: 'posts#newsfeed', as: 'newsfeed'
  end
end
