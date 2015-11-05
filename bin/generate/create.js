'use strict';
var fs = require('fs-extra'),
    prompt = require('prompt');

module.exports.interactiveCreate = function (appName) {
    prompt.start();
    prompt.get([
        {
            name: 'version',
            pattern: /^\d+\.\d+\.\d+$/,
            default: '1.0.0'
        }
    ], function (err, options) {
        options.appName = appName;
        createNpmPackage(options);
        copyDefaultProject();
    });
};

var createNpmPackage = function (options) {
    var hangrPackage = require(__dirname + '/../../package.json');
    var packageJson = {
        name: options.appName,
        version: options.version,
        main: 'server.js',
        dependencies: {
            hangr: '^' + hangrPackage.version
        },
        devDependencies: {
            "browser-sync": "^2.9.11",
            gulp: "^3.9.0",
            "gulp-nodemon": "^2.0.4"
        },
        scripts: {
            "prestart": "npm prune && npm install",
            "start": "NODE_ENV=development gulp browser-sync",
            "predeploy": "npm prune && npm install --production",
            "deploy": "NODE_ENV=production node server.js"
        },
        engines: {
            node: hangrPackage.engines.node
        }
    };
    if(options.private) {
        packageJson.private = true;
    }
    fs.writeJson('./package.json',
        packageJson,
        function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Created: package.json');
            }
        }
    );
};

var copyDefaultProject = function() {
    fs.copy(__dirname + '/defaultStructure', '.', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Copied Default Project Structure");
    });
};


if (process.env.NODE_ENV === 'test') {
    module.exports._private = {
        concatAuthorAndEmail: concatAuthorAndEmail
    };
}