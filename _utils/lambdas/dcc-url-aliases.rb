#!/usr/bin/env ruby -w
# frozen_string_literal: true

#
# Generates Node.js Lambda@Edge function for https://docs.cloudera.com/
# Depends on
# - dcc-url-aliases.yml
# - dcc-url-aliases.erb
#

require 'erb'
require 'yaml'

ALIASES  = 'dcc-url-aliases.yml'
TEMPLATE = 'dcc-url-aliases.erb'
NODEJS   = 'dcc-url-aliases.js'

@aliases = YAML.safe_load(File.read(File.expand_path(ALIASES, __dir__)))

def regexp_esc(string)
  string.gsub(/([?.()\[\]{}*^+|$])/, '[\1]')
end

template = File.read(File.expand_path(TEMPLATE, __dir__))
js = ERB.new(template, trim_mode: '%<>').result
File.write(NODEJS, js)
puts js
