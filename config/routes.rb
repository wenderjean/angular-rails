Rails.application.routes.draw do
  root to: "main#index"
  resources :tasks, :defaults => { :format => 'json' } do
  	resources :comments
  end
  # get '*path', to: 'main#index'
end
