# SoShiok

A full stack restaurant app built using Node.js 7.6+ and modern JavaScript.

***Note: Please do not use this for production. The application is still under heavy development and the API is not stable.***

## Overview

[![Build Status][travis-image]][travis-url]

* [Features](#features)
* [Application Architecture](#architecture)
  * [Functionalties](#functionalties)
  * [Development Stack](#development)
* [Quickstart](#quickstart)
* [Documentation](#documentation)
  * [Standard](#standard)
  * [Sample Data](#data)
  * [Deployment](#deployment)

## Features

Users can:
- Search
- Geolocate
- Review
- Curate their favourite restaurants

## Architecture

The application has three main models
- Users
- Stores
- Reviews

All models are relational.

### Functionalties

The application is designed for today's technology needs such as:
- User authentication
- Database storage
- AJAX REST API
- File upload and image resizing

### Development

Modern JavaScript:
- ECMAScript 6 (ES6) also known as ECMAScript 2015 (ES2015)
  - ES6 features are heavily used throughout the app, from destructuring to arrow functions
- ES6 Async + Await
  - It allows us to craft easy to read, logical flows without relying on external flow control libraries, chaining multiple promises, or writing spaghetti code by nesting callbacks
- Express
- Pug templating
- Passport for unobtrusive authentication
  - Passport is a middleware for Node.js
- SCSS for CSS
- Webpack

## Quickstart

Basically, the app was developed in ES6. You should have knowledge of how functions, variables, Objects, Arrays and other JavaScript fundamentals work.

Prerequisite:
- Runtime: make sure we have Node.js 7.6 and above installed in our development environment.
- Database: we are using MongoDB 3.2.x

Then, clone the git repo. Rename `variables.env.sample` to `variables.env`. Update the environment settings in this configuration file.

Run the following command in your terminal:

Install all node packages (dependencies) listed in `package.json` file:

```bash
npm install
```

Start our server and run the app:

```bash
npm start
```

## Documentation

### Standard

The app was designed and developed based on widely adopted general JavaScript best practices from the industry's best Node.js developers.

### Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Cedric Chee|cedric@example.com|cedric|
|John Doe|john@example.com|john|
|Foo Bar|foo@example.com|foo|

### Deployment

Supports:
- [x] Deploying to Now
- [ ] Deploying to Heroku
- [ ] Digital Ocean Linux
