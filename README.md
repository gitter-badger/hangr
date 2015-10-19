# Coming Soon

## hangr

[![](https://img.shields.io/npm/v/hangr.svg)](https://www.npmjs.com/package/hangr)
[![](https://img.shields.io/npm/l/hangr.svg)]()

[![Build Status](http://jenkins.hangr.software/buildStatus/icon?job=hangr)](http://jenkins.hangr.software/job/hangr/)
[![Code Climate](https://codeclimate.com/github/hangr/hangr/badges/gpa.svg)](https://codeclimate.com/github/hangr/hangr)

### Web Application Stack

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

### Yeoman Seed Coming Soon
Copy the structure of [hangr-website](https://github.com/hangr/hangr-website)

Server.js

```node
'use strict';

var Hangr = require('hangr');

Hangr.connections();
Hangr.addAngularRoutes();
Hangr.start();
```

## Run App
```bash
npm start
```
