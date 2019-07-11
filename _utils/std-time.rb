#!/usr/bin/env ruby -w
# frozen_string_literal: true

#
# Set all files to the same timestamp so Cyberduck will only
# transfer files that are different in size or hash.
# This program is meant to be in the _utils directory when
# it is run.
#

require 'fileutils'
require 'find'
require 'time'

TIME = Time.parse('2018-12-01T00:00:00Z').freeze

Find.find(File.join(__dir__, '../_site')) do |path|
  FileUtils.touch(path, mtime: TIME) if FileTest.file?(path)
end
