# -*- encoding: utf-8 -*-
require File.expand_path('../lib/spectrum-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Kevin Trotter"]
  gem.email         = ["cskevint@gmail.com"]
  gem.description   = "A ruby gem that uses the Rails asset pipeline to include the Spectrum jQuery plugin by Brian Grinstead (@bgrins)."
  gem.summary       = "Includes javascript and css files for the Spectrum jQuery plugin."
  gem.homepage      = "https://github.com/cskevint/spectrum-rails"

  gem.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE", "README.md"]
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "spectrum-rails"
  gem.require_paths = ["lib"]
  gem.version       = Spectrum::Rails::VERSION
  
  gem.add_dependency "railties", ">= 3.1"
  gem.license = 'MIT'
end
