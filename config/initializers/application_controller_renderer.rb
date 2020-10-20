# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end

CONFIG = YAML.load_file("#{Rails.root.to_s}/config/powerbi.yml")[Rails.env]