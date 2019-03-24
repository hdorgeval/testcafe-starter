# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.1.0] - 2019-03-24

### Changed

- update all dependencies

## [4.0.0] - 2019-03-11

### Changed

- adapt this starter project to new TestCafe v1.0.0
- integrate HTML reporter
- update all dependencies
- remove TestCafe Live dependency (now integrated in TestCafe)
- simplify project structure
- remove static analyser

## [3.1.1] - 2018-12-18

### Changed

- update testcafe-static-analyser dependency.
  - this new version is able to analyse `.meta` syntax and `test`syntax split on multiple lines.

## [3.1.0] - 2018-12-07

### Fixed

- update dependencies and remove vulnerability on 'event-stream'

## [3.0.0] - 2018-11-20

### Fixed

- update dependencies

## [2.1.0] - 2018-07-22

### Added

- added support of prettier

## [2.0.2] - 2018-07-21

### Changed

- documentation updated and reviewed to reflect changes in 2.0.0

## [2.0.1] - 2018-07-21

### Changed

- documentation updated to reflect changes in 2.0.0

## [2.0.0] - 2018-07-21

### Added

- remove all boilerplate code and create a script (`npm run build-step-mappings`) to automatically bind all steps to feature files.
- this version can be seen as a lightweight cucumber-ts/SpecFlow implementation with full support of all TestCafe and TestCafe Live functionalities.
