var Inert = require('inert');

exports.register = function (server, options, next) {

    server.register(Inert, function () {
        console.log('Plugin Registered: Inert (Static Content Enabled).');
    });

    var spaRoutes = [
        {
            method: 'GET',
            path: '/',
            handler: {
                file: './' + options.base + '/index.html'
            }
        }, {
            method: 'GET',
            path: '/{param*}',
            handler: {
                file: './' + options.base + '/index.html'
            }
        }
    ];

    options.dirs.forEach(function (dir) {
        var relativePath = './' + options.base + '/' + dir;
        console.log('Adding SPA route: ' + relativePath);
        spaRoutes.push({
            method: 'GET',
            path: '/' + dir + '/{param*}',
            handler: {
                directory: {
                    path: relativePath,
                    listing: false,
                    index: false
                }
            }
        });
    });

    server.route(spaRoutes);
    server.emit('spaRoutesAdded');
    return next();
};

exports.register.attributes = {
    name: 'spaRoutes',
    version: '1.0.0'
};