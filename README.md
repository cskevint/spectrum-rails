# Spectrum::Rails

A ruby gem that uses the Rails asset pipeline to include the Spectrum jQuery plugin by Brian Grinstead (@bgrins):

* Homepage: http://bgrins.github.com/spectrum/
* Source Code: https://github.com/bgrins/spectrum

## Installation

Add this line to your application's Gemfile:

    gem 'spectrum-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install spectrum-rails

NOTE: this is a jQuery plugin so you will also need the `jquery-rails` gem:

* https://github.com/rails/jquery-rails

## Usage

In your `application.js` you will need to add this line:

    //= require spectrum
   
And in your `application.css` you will need to add this line:

    *= require spectrum

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
