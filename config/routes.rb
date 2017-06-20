Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
  end
end
