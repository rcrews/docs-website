#!/usr/bin/env ruby -w
# frozen_string_literal: true

# Create client-side redirects for www.cloudera destinations referenced
# from (legacy) cloudera documentation. Whenever a link starts with a
# slash (under the expection the URL references a resource on the
# www.cloudera.com site) we can redirect to the equivalent
# www.cloudera.com resource.

require 'erb'
require 'fileutils'
require 'yaml'

REDIRECTS = 'redirects.yml'
redirects = YAML.safe_load(File.read(File.expand_path(REDIRECTS, __dir__)))

template = '<meta http-equiv="refresh" content="0; URL=<%= @destination %>">'

redirects.each do |redirect|
  @destination = redirect['d']
  html = ERB.new(template, trim_mode: '%<>')
  FileUtils.mkdir_p File.dirname(redirect['s'])
  File.write(redirect['s'], html.result)
end
