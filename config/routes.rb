Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index] do
      resource :profile, only: [:show, :update]
    end
    resource :session, only: [:create, :destroy]
  end
end
