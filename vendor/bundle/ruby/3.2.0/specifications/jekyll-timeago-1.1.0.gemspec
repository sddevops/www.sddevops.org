# -*- encoding: utf-8 -*-
# stub: jekyll-timeago 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-timeago".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["markets".freeze]
  s.date = "2025-08-12"
  s.description = "A Ruby library to compute distance of dates in words. Originally built for Jekyll, as a Liquid extension. It also supports localization and futures.".freeze
  s.email = ["srmarc.ai@gmail.com".freeze]
  s.executables = ["timeago".freeze]
  s.files = ["bin/timeago".freeze]
  s.homepage = "https://github.com/markets/jekyll-timeago".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.20".freeze
  s.summary = "A date helper to compute distance of dates in words.".freeze

  s.installed_by_version = "3.4.20" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<mini_i18n>.freeze, [">= 0.8.0"])
  s.add_development_dependency(%q<jekyll>.freeze, [">= 1.5"])
  s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
  s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
end
