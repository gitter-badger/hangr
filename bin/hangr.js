#!/usr/bin/env node
'use strict';

var cli = require('commander'),
    create = require('../lib/create'),
    fs = require('fs');

cli.version('v' + require('../package.json').version);

cli.command('create [name]')
    .description('create a new application')
    .option('--no-spa', 'Do not include Single Page Application directory')
    .option('--no-api', 'Do not include REST Application Program Interface directory')
    .action(create.all);

cli.command('*')
    .action(function(env) {
        if(fs.existsSync('server.js')) {
            cli.outputHelp();
        } else {
            console.log('TODO: Deploy');
        }
    });

cli.parse(process.argv);

//var Hapi = require('hapi');
//
//function Hangr(port) {
//    this.port = port || 55555;
//    this.spa = {
//        enabled: true,
//        base: 'public',
//        dirs: ['css', 'js', 'img', 'views']
//    };
//    this.hapiServer = new Hapi.Server();
//}
//
//function _enableSpaRoutes () {
//    var AngularRoutes = require('./plugins/spaRoutesPlugin');
//    console.log('info', 'Enabling SPA Routes...');
//    this.hapiServer.register({
//        register: AngularRoutes,
//        options: {
//            base: this.spa.base,
//            dirs: this.spa.dirs
//        }
//    }, function () {
//        console.log('SPA Routes Enabled');
//    });
//}
//
//Hangr.prototype.disableSpa = function () {
//    this.spa.enabled = false;
//};
//
//Hangr.prototype.start = function (callback) {
//    this.hapiServer.connection({port: this.port});
//    if (this.spa.enabled) {
//        _enableSpaRoutes.call(this);
//    }
//    var hapiServer = this.hapiServer;
//    this.hapiServer.start(function () {
//        console.log('Server running at: ' + hapiServer.info.uri);
//        (callback || function () {})();
//    });
//};
//
//Hangr.prototype.stop = function (callback) {
//    this.hapiServer.stop(function () {
//        console.log('Goodbye');
//        (callback || function () {})();
//    });
//};
//
//Hangr.prototype.Hangr = Hangr;
//
//var hangr = module.exports = exports = new Hangr;