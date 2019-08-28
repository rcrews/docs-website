#!/usr/bin/env ruby -w
# frozen_string_literal: true

#
#
#

require 'erb'
require 'fileutils'
require 'yaml'

aliases = YAML.load(File.read('/Users/rcrews/Sandbox/docs-website/_utils/aliases.yml'))

template = '<meta http-equiv="refresh" content="0; URL=<%= @destination %>">'

aliases.each do |redirect|
  # @destination = redirect['d']
  # html = ERB.new(template, trim_mode: '%<>')
  # FileUtils.mkdir_p File.dirname(redirect['s'])
  # File.write(redirect['s'], html.result)
end
