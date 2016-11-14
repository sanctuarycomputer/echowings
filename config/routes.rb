Rails.application.routes.draw do
  root to: 'home#index'
  get 'debug', to: 'home#debug'
end
