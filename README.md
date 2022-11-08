# Customized JSON Resume Theme: Rocketspacer

🖼️ This is a tweaked version of the [Rocketspacer theme](https://github.com/rocketspacer/jsonresume-theme-rocketspacer). Tweaked to fit my design preferences. Published on NPM and GitHub Registry.

## Notable Changes

* 2 Page version in PDF/printable mode 
* Added sections for speaking and articles
* Style changes

## Prerequisites

To build and start the local server, it needs to use the cli command, which is custom cli I tweaked.

`npm i @anthonyjdella/customized-resume-cli`

## How to Start

`npm run start`

## How to Change

* `views/resume.ejs` is the order of the resume.
* `views/partials/` are the html files for each section
* `assets/styles/style.css` is the styling
* To make changes to the PDF/printable version, make changes in the `@print` section of `assets/styles/style.css`
* Change version number in `package.json`
* Deploy the changes via `npm publish --access public`
* To see changes from `resume.anthonydellavecchia.com` you need to go to the [registry project](https://github.com/anthonyjdella/customized-registry-functions), then cd into `functions`, run `npm i` and `npm update`, then `firebase deploy`.

## Usage
* `npm run start` to start local server.

<details>
  <summary>Click to expand README.md of the source repository!</summary>

# jsonresume-theme-rocketspacer

[![node](https://img.shields.io/node/v/jsonresume-theme-rocketspacer.svg)](https://www.npmjs.com/package/jsonresume-theme-rocketspacer)
[![npm](https://img.shields.io/npm/v/jsonresume-theme-rocketspacer.svg)](https://www.npmjs.com/package/jsonresume-theme-rocketspacer)
[![David](https://img.shields.io/david/rocketspacer/jsonresume-theme-rocketspacer.svg)](https://david-dm.org/rocketspacer/jsonresume-theme-rocketspacer)
[![npm](https://img.shields.io/npm/dm/jsonresume-theme-rocketspacer.svg)](https://www.npmjs.com/package/jsonresume-theme-rocketspacer)
[![Travis branch](https://img.shields.io/travis/rocketspacer/jsonresume-theme-rocketspacer.svg)](https://travis-ci.org/rocketspacer/jsonresume-theme-rocketspacer)

A [jsonresume](https://jsonresume.org) theme built in my free time. Watch it live [here](https://rocketspacer.github.io/jsonresume-theme-rocketspacer)

<img src="/sample.png" alt="jsonresume-rocketspacer-theme sample image"/>

## Usage

```sh
$ npm install --global resume-cli
$ resume serve --resume <your-resume.json> --theme rocketspacer
```

## Credits

Original styling is taken from [eddywashere](https://github.com/eddywashere/resume) theme. Much credit goes to him.
