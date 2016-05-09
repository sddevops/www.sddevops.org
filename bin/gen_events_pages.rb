#!/usr/bin/ruby

require 'fileutils'
require 'net/http'
require 'json'
 
outdir = __dir__ + "/../"
base = 'http://www.meetup.com/sddevops/'
url = 'https://api.meetup.com/sddevops/events?desc=desc&photo-host=secure&page=500&sig_id=8736384&status=past%2Cupcoming&sig=e06c2cf10244efeccff7dc85611bfa7936fc6c19'
response = Net::HTTP.get(URI(url))

parsed = JSON.parse(response)

parsed.each do |event|
  dir =  outdir + event["link"].partition(base)[2]
  file = dir + "index.md"
  p file, event["link"], event["name"]
  FileUtils.mkdir_p(dir, verbose: true)
  template = <<"EOS";
---
title: "#{event['name']}"
redirect_to:
  - #{event['link']}
---
EOS
  File.write(file, template)
end
