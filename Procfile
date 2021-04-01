web: bin/rails server -p ${PORT:-5000} -e $RAILS_ENV
worker: sidekiq
release: bind/rails db:migrate