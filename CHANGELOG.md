# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 2019-05-27

### Changed

-   Yarn deploy was used, package.json version moved to 3.0.0. Should be 2.0.0 but due to an earlier mistake...bumped!

## [1.1.0] - 2019-05-27

### Changed

-   Styling and view changes to Home, BookList, BookSearch, NavBar
-   Encountered errors in GoogleBooks.ts with images. Crude image logic to always have an image.

### Removed

-   Footer

## [1.0.0] - 2019-05-27

### Changed

-   Yarn deploy was used, package.json version moved to 1.0.0

## [0.2.0] - 2019-05-27

### Changed

-   Removed App from footer
-   Added now classed as Minor feature increase, not just patch/hotfix
-   Home now utilises BookSearch and BookList components

### Added

-   Redux, Redux-thunk, and state management for Book components
-   Added BookSearch and BookList components for book searching

## [0.1.5] - 2019-05-26

### Fixed

-   Corrected CHANGELOG.md formatting

## [0.1.4] - 2019-05-26

### Fixed

-   Hotfix applied to package.json to correct code coverage report

## [0.1.3] - 2019-05-26

### Added

-   Added Google Books API and associated tests

## [0.1.2] - 2019-05-24

### Added

-   Added pre-commit checks for code tests and linting via lint-staged and husky

## [0.1.1] - 2019-05-22

### Added

-   gh-pages 3rd party added to package

### Fixed

-   Build and deploy to GitHub pages

## [0.1.0] - 2019-05-22

### Added

-   Base template from create-react-app with TypeScript
-   Restructured components into folders
-   Added rooting and root view (Home)
-   Added Test Material Icons and Lottie Component to Home
-   CSS to SCSS Modules
-   Jest and Faker for testing
-   Code linting, quality, coverage, and analysis checks via [SonarTS](https://github.com/SonarSource/SonarTS), ESLint, and Prettier
-   Material-ui and theme customisation (Google Colors in Variable files)
-   VSCode set up for debugging tests and auto formatting on save

## [0.0.0] - 2019-05-21

-   Repository created
