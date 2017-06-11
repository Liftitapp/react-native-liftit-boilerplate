#!/usr/bin/env ruby

require 'inflecto'
require 'pry'

# $importPattern = /^(import { \w* as \w* } from) '([^']*)'$/
$importPattern = /^(import (.*?) from) '(\.[^']*)([^']*)'$/

def transformLine(line)
  matchResult = $importPattern.match(line)
  if matchResult
    importStart = matchResult[1]
    currentPath = matchResult[3]
    newPath = Inflecto.underscore currentPath
    newLine = "#{importStart} '#{newPath}'\n"
    return newLine
  else
    return line
  end
end

targetFile = ARGV[0]
newLines = []
File.open targetFile do |f|
  f.each_line do |line|
    newLines << transformLine(line)
  end
end

newContents = "#{newLines.join("")}"
File.new(targetFile, "w").write newContents

exit 0