require "rake"

task :default => :test

desc "Preview the site with Jekyll"
task :preview do
  sh "bundle exec jekyll serve --watch --drafts"
end

BUILD_DIR = "_site"
file BUILD_DIR do
  sh "bundle exec jekyll build --drafts"
end

task :test => [:validate, :proof]

desc "Test the site with Proofer"
task :proof => BUILD_DIR do
  require "html/proofer"
  HTML::Proofer.new(BUILD_DIR).run
end

VALIDATOR = "dist/vnu.jar"
file VALIDATOR do |f|
  sh "curl -Lo vnu.zip https://github.com/validator/validator/releases/download/16.3.3/vnu.jar_16.3.3.zip"
  sh "unzip vnu.zip #{f.name}"
end

task :validate => [BUILD_DIR, VALIDATOR] do
  sh "java -jar #{File.join(".", VALIDATOR)} --skip-non-html #{BUILD_DIR}"
end
