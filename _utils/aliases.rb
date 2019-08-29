#!/usr/bin/env ruby -w
# frozen_string_literal: true

#
# Generates Node.js Lambda/Lambda@Edge function for
# - http://docs-dev.cloudera.com/
# - http://docs-stage.cloudera.com/
# - https://docs.cloudera.com/
# Depends on
# - aliases.yml
# - aliases.erb
#

require 'erb'
require 'yaml'

ALIASES  = 'aliases.yml'
TEMPLATE = 'aliases.erb'
NODEJS   = 'aliases.js'

@aliases = YAML.safe_load(File.read(File.expand_path(ALIASES, __dir__)))

def regexp_esc(string)
  string.gsub(/([?.()\[\]{}*^+|$])/, '[\1]')
end

template = File.read(File.expand_path(TEMPLATE, __dir__))
js = ERB.new(template, trim_mode: '%<>').result
File.write(NODEJS, js)
puts js
