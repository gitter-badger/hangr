'use strict';

var Hapi = require('hapi');

function Hangr(port) {
    this.port = port || 55555;
    this.spa = {
        enabled: true,
        base: 'spa',
        dirs: ['css', 'js', 'img', 'views']
    };
    this.hapiServer = new Hapi.Server();
}

function _enableSpaRoutes () {
    var AngularRoutes = require('./plugins/spaRoutes');
    console.log('info', 'Enabling SPA Routes...');
    this.hapiServer.register({
        register: AngularRoutes,
        options: {
            base: this.spa.base,
            dirs: this.spa.dirs
        }
    }, function () {
        console.log('SPA Routes Enabled');
    });
}

Hangr.prototype.start = function (callback) {
    this.hapiServer.connection({port: this.port});
    if (this.spa.enabled) {
        _enableSpaRoutes.call(this);
    }
    var hapiServer = this.hapiServer;
    this.hapiServer.start(function () {
        console.log('Server running at: ' + hapiServer.info.uri);
        (callback || function () {})();
    });
};

Hangr.prototype.stop = function (callback) {
    this.hapiServer.stop(function () {
        console.log('Goodbye');
        (callback || function () {})();
    });
};

Hangr.prototype.Hangr = Hangr;

var hangr = module.exports = exports = new Hangr;