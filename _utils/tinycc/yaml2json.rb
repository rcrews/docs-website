#!/usr/bin/env ruby -w
# frozen_string_literal: true

# Usage: ruby yaml2json.rb

require 'psych'
require 'json'

input  = __dir__ << '/urls.yaml'
output = __dir__ << '/urls.json'

File.open(output, 'w') do |file|
  file.write(JSON.pretty_generate(Psych.load_file(input)))
end
