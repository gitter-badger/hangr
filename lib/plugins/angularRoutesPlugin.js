var Inert = require('inert');

exports.register = function (server, options, next) {

    server.register(Inert, function () {
        console.log('Plugin Registered: Inert (Static Content Enabled).');
    });

    server.route([
        {
            method: 'GET',
            path: '/css/{param*}',
            handler: {
                directory: {
                    path: './public/css',
                    listing: false,
                    index: false
                }
            }
        }, {
            method: 'GET',
            path: '/js/{param*}',
            handler: {
                directory: {
                    path: './public/js',
                    listing: false,
                    index: false
                }
            }
        }, {
            method: 'GET',
            path: '/img/{param*}',
            handler: {
                directory: {
                    path: './public/img',
                    listing: false,
                    index: false
                }
            }
        }, {
            method: 'GET',
            path: '/templates/{param*}',
            handler: {
                directory: {
                    path: './public/templates',
                    listing: false,
                    index: false
                }
            }
        }, {
            method: 'GET',
            path: '/',
            handler: {
                file: './public/index.html'
            }
        }, {
            method: 'GET',
            path: '/{param*}',
            handler: {
                file: './public/index.html'
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name: 'angularRoutes',
    version: '1.0.0'
};