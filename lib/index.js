var Hapi = require('hapi');

var internals = {};

exports.connections = function (port) {
    exports.HapiServer = internals.HapiServer = internals.HapiServer || new Hapi.Server();
    internals.HapiServer.connection({port: port || 55555});
};

exports.addAngularRoutes = function () {
    var AngularRoutes = require('./plugins/angularRoutesPlugin');
    console.log('Enabling AngularJS Routes...');
    internals.HapiServer.register(AngularRoutes, function () {
        console.log('AngularJS Routes Enabled');
    });
};

exports.start = function () {
    internals.HapiServer.start(function () {
        console.log('Server running at:', internals.HapiServer.info.uri);
    });
};

exports.stop = function () {
    internals.HapiServer.stop(function () {
        console.log('Goodbye');
    });
};