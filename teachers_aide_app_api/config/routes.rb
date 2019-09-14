Rails.application.routes.draw do
  resources :teachers do
    resources :lessons do
      resources :students do
        resources :grades, only: [:index, :create, :update, :delete]
      end
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end



