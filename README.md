# hangr **(COMING SOON)**

[![Circle CI](https://circleci.com/gh/hangr/hangr/tree/master.svg?style=svg)](https://circleci.com/gh/hangr/hangr/tree/master)
[![Build Status](http://jenkins.hangr.software/buildStatus/icon?job=hangr)](http://jenkins.hangr.software/job/hangr/)
[![Code Climate](https://codeclimate.com/github/hangr/hangr/badges/gpa.svg)](https://codeclimate.com/github/hangr/hangr)
[![License](https://img.shields.io/npm/l/hangr.svg)](http://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/hangr.svg)](https://www.npmjs.com/package/hangr)

[![NPM](https://nodei.co/npm/hangr.png?downloads=true&stars=true)](https://nodei.co/npm/hangr/)

## Web Application Stack

* [Hapi](http://hapijs.com)
* [AngularJS](https://angularjs.org)
* [RethinkDB](https://www.rethinkdb.com)


## Setup hangr Globally
```bash
sudo npm install hangr -g
```

## Create Application
```bash
mkdir testApp
cd testApp
hangr create testApp
```
**follow the prompts to populate npm package.json**

This will create the default application with a Single Page Application (SPA).

The project will be loaded with the following dependencies:
* [JQuery](https://jquery.com)
* [AngularJS](https://angularjs.org)
* [Bootstrap](http://getbootstrap.com)
* [Font Awesome](https://fortawesome.github.io/Font-Awesome/)

## Run Application
```bash
hangr
```

## Use Application
View **running** default application: [Default Application Page](http://localhost:55555)

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
