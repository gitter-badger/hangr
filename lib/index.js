var Hapi = require('hapi');

internals = {};

exports.addAngularRoutes = function (angularRootPath) {

    angularRootPath = angularRootPath || '../public';
    exports.Hapi = internals.Hapi = new Hapi.Server({
        connections: {
            routes: {
                files: {
                    relativeTo: Path.join(__dirname, angularRootPath)
                }
            }
        }
    });

    var Inert = require('inert');
    internals.Hapi.register(Inert, function () {

        console.log('Static Content Enabled.');
    });

    var AngularRoutes = require('./plugins/angularRoutesPlugin');
    console.log('Enabling AngularJS Routes...');
    internals.Hapi.register(AngularRoutes, function () {

        console.log('AngularJS Routes Enabled');
    });
};

exports.start = function () {

    exports.Hapi = internals.Hapi = internals.Hapi || new Hapi.Server();
    internals.Hapi.connection({ port: 55555 });
    internals.Hapi.start(function () {

        console.log('Server running at:', internals.Hapi.info.uri);
    });
};

exports.stop = function () {

    internals.Hapi.stop(function () {

        console.log('Goodbye');
    });
};
