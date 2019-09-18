#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'find'
require 'pathname'

# module
module SwitchSite
  # Use UTC for times, especially log entries
  ENV['TZ'] = 'UTC'

  def self.scan_up_for(mark, dir = Dir.pwd)
    return nil if dir == '/' && !File.exist?(File.join(dir, mark))

    here = File.expand_path(mark, dir)
    if File.exist?(here)
      File.dirname(here)
    else
      self.scan_up_for(mark, File.expand_path('..', dir))
    end
  end

  def self.copy_out_for(root)
    SwitchSite::FFind.find_files(root).each do |path|
      dest = File.expand_path(
        Pathname.new(path).relative_path_from(Pathname.new(root)), JEKYLL
      )
      FileUtils.cp(path, dest, verbose: true)
    end
  end

  DEV_REL = '_sites/docs-dev.cloudera.com/root'
  PROD_REL = '_sites/docs.cloudera.com/root'
  JEKYLL = self.scan_up_for('_config.yml')
  DEV = File.absolute_path(DEV_REL, JEKYLL)
  PROD = File.absolute_path(PROD_REL, JEKYLL)

  # Encapsulates a better practice for using File::find than illustrated
  # in the ruby-docs summary example. Maybe not a best practice, but at
  # least a better one.
  # @author Robert Crews <rcrews@mac.com>
  # @see https://ruby-doc.org/stdlib-2.6.4/libdoc/find/rdoc/Find.html
  # @since 0.1.0
  class FFind
    # Skip directory?
    # @param path [String] A file path from Find.find
    # @return [Boolean] true = Skip directory; false = Descend into directory
    # @since 0.1.0
    def self.prune?(path)
      File.basename(path)[0] == '.'
    end

    # Skip file?
    # @param path [String] A file path from Find.find
    # @return [Boolean] true = Skip file; false = Don't skip file
    # @since 0.1.0
    def self.skip?(path)
      File.basename(path)[0] == '.'
    end

    # Gather file paths.
    # Set prune/skip behavior in {#skip} and {#prune}
    # @param root [String] Directory path to begin search
    # @return [Array] Array of strings representing file paths
    # @since 0.1.0
    def self.find_files(root, files = [])
      Find.find(root) do |path|
        (prune?(path) ? Find.prune : next) if FileTest.directory?(path)
        files << path unless skip?(path)
      end
      files
    end
  end
end

if $PROGRAM_NAME == __FILE__
  if ``
    puts 'Uncommitted changes found. No switch made. Exiting.'
    exit 1
  end

  `git reset --hard HEAD`

  case ARGV[0]
  when /^(?:dev|docs-d)/i
    SwitchSite.copy_out_for(SwitchSite::DEV)
  when /^(?:prod|docs\.)/i
    SwitchSite.copy_out_for(SwitchSite::PROD)
  end
end
