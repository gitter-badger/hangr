var fs = require('fs-extra'),
    Inert = require('inert');

exports.register = function (server, options, next) {

    server.register(Inert, function () {
    });

    var spaRoutes = [
        {
            method: 'GET',
            path: '/',
            handler: {
                file: options.base + '/index.html'
            }
        }, {
            method: 'GET',
            path: '/{param*}',
            handler: {
                file: options.base + '/index.html'
            }
        }
    ];


    try {
        var absoluteBasePath = process.cwd() + '/' + options.base;
        var directories = fs.readdirSync(absoluteBasePath)
            .filter(function (file) {
                var absoluteFile = absoluteBasePath + '/' + file;
                return fs.statSync(absoluteFile).isDirectory();
            });
        directories.forEach(function(dir) {
            var relativePath = options.base + '/' + dir;
            console.log('Adding SPA route: /' + relativePath);
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
    } catch (ex) {
        console.error('SPA base "' + options.base + '" not found');
    }

    server.route(spaRoutes);
    server.emit('spaRoutesAdded');
    return next();
};

exports.register.attributes = {
    name: 'spaRoutes',
    version: '1.0.0'
};