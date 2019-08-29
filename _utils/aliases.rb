#!/usr/bin/env ruby -w
# frozen_string_literal: true

#
# <%= @destination %>
#

require 'erb'
require 'yaml'

ALIASES = '/Users/rcrews/Sandbox/docs-website/_utils/aliases.yml'
@aliases = YAML.safe_load(File.read(ALIASES))

def regexp_esc(string)
  string.gsub(/([?.()\[\]*+])/, '[\1]')
end

template = File.read('aliases.erb')
puts ERB.new(template, trim_mode: '%<>').result.sub("\n;", ';')
