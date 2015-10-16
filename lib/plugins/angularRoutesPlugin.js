var Angular = require('angular'),
    Hoek = require('hoek'),
    Vision = require('vision');

var getIndex = function (request) {

    return request.reply.view('index');
};

exports.register = function (server, options, next) {

    server.register(Vision, function (err) {

        Hoek.assert(!err, err);
        server.views({
            engines: {
                html: Angular
            },
            relativeTo: __dirname//,
            //path: 'templates'
        });
    });

    server.route([
        {
            method: 'GET',
            path: '/{path*}',
            handler: getIndex
        }, {
            method: 'GET',
            path: '/css/{path*}',
            handler: {
                directory: {
                    path: './css'
                }
            }
        }, {
            method: 'GET',
            path: '/js/{path*}',
            handler: {
                directory: {
                    path: './js'
                }
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name: 'angularRoutes',
    version: '1.0.0'
};
