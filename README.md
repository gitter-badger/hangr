# Coming Soon

# hangr

[![Build Status](http://jenkins.hangr.software/buildStatus/icon?job=hangr)](http://jenkins.hangr.software/job/hangr/)
[![Code Climate](https://codeclimate.com/github/hangr/hangr/badges/gpa.svg)](https://codeclimate.com/github/hangr/hangr)
[![License](https://img.shields.io/npm/l/hangr.svg)](http://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/hangr.svg)](https://www.npmjs.com/package/hangr)

[![NPM](https://nodei.co/npm/hangr.png?downloads=true&stars=true)](https://nodei.co/npm/hangr/)

## Web Application Stack

* [Hapi](http://hapijs.com)
* [AngularJS](https://angularjs.org)
* [npm](https://www.npmjs.com)
* [gulp](http://gulpjs.com)
* [RethinkDB](https://www.rethinkdb.com)


## Setup

### Add to project
```bash
npm install hangr --save
```
**Yeoman Seed Coming Soon**

## Static Web Applications

# Default Static Project
Structure
```plain
public
  - css
  - js
  - img
  - views
  - index.html
server.js
```

Server.js
```node
'use strict';

var Hangr = require('hangr');

var hangr = new Hangr();
hangr.addSpaRoutes();
hangr.start();
```

# Custom Static Project
Structure
```plain
webapp
  - css
  - js
  - img
  - templates
  - index.html
server.js
```

Server.js
```node
'use strict';

var Hangr = require('hangr');

var hangr = new Hangr();
hangr.addSpaRoutes({
    base: 'webapp',
    dirs: ['css', 'js', 'img', 'templates']
});
hangr.start();
```
**base** and **dirs** are both optional

## Run App
```bash
npm start
```