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

var hangr = require('hangr');

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

var hangr = require('hangr');

hangr.spa.base = 'webapp';
hangr.spa.dirs = ['css', 'js', 'img', 'templates'];
hangr.start();
```
**base** and **dirs** are both optional

## Run App
```bash
npm start
```

## License

```text
The MIT License (MIT)

Copyright (c) 2015 David Clutter and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
