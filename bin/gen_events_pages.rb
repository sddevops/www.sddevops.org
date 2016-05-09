#!/usr/bin/ruby

require 'fileutils'
require 'net/http'
require 'json'
 
outdir = __dir__ + "/../"
base = 'http://www.meetup.com/sddevops/'
url = 'https://api.meetup.com/sddevops/events?desc=desc&photo-host=secure&page=500&sig_id=8736384&status=past&sig=4a913cedbbe925283af8c4e1635571e468b922a7'
response = Net::HTTP.get(URI(url))

parsed = JSON.parse(response)

parsed.each do |event|
  dir =  outdir + event["link"].partition(base)[2]
  file = dir + "index.md"
  p file, event["link"], event["name"]
  FileUtils.mkdir_p(dir, verbose: true)
  template = <<"EOS";
---
title: #{event['name']}
redirect_to:
  - #{event['link']}
---
EOS
  File.write(file, template)
end
