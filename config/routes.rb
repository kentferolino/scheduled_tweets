Rails.application.routes.draw do

  # GET /bout
  get "about-us", to: "about#index", as: "about"

  root to: "main#index"
  # get "", to: "main#index"

end
