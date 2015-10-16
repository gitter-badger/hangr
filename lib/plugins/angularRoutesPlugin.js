var Inert = require('inert');

var getIndex = function(request, response) {
    response.file('./public/index.html');
};

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
            handler: getIndex
        }, {
            method: '*',
            path: '/{param*}',
            handler: getIndex
        }
    ]);
    next();
};

exports.register.attributes = {
    name: 'angularRoutes',
    version: '1.0.0'
};