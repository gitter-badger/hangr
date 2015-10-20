var Hapi = require('hapi'),
    Hoek = require('hoek');

var internals = {};

exports = module.exports = internals.Hangr = function (options) {
    Hoek.assert(this instanceof internals.Hangr, 'Hangr must be instantiated using new');

    options = options || {};
    this.port = options.port || 55555;
    this.hapiServer = new Hapi.Server();
    this.hapiServer.connection({port: this.port});
};

internals.Hangr.prototype.addSpaRoutes = function (options) {
    var AngularRoutes = require('./plugins/spaRoutesPlugin');
    console.log('info', 'Enabling SPA Routes...');
    this.hapiServer.register(
        {
            register: AngularRoutes,
            options: options
        }, function () {
            console.log('SPA Routes Enabled');
        });
};

internals.Hangr.prototype.start = function () {
    var hapiServer = this.hapiServer;
    hapiServer.start(function () {
        console.log('Server running at: ', hapiServer.info.uri);
    });
};

internals.Hangr.prototype.stop = function () {
    var hapiServer = this.hapiServer;
    hapiServer.stop(function () {
        console.log('Goodbye');
    });
};