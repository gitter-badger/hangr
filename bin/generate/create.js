'use strict';
var fs = require('fs-extra'),
    prompt = require('prompt');

module.exports.interactiveCreate = function (appName) {
    prompt.start();
    prompt.get([
        'description',
        {
            name: 'version',
            pattern: /^\d+\.\d+\.\d+$/,
            default: '1.0.0'
        },
        'homepage',
        'author',
        'email',
        {
            name: 'repositoryType',
            default: 'git'
        },
        {
            name: 'repositoryUrl'
        },
        'bugsUrl',
        {
            name: 'license',
            default: 'ISC'
        }
    ], function (err, options) {
        options.appName = appName;
        createNpmPackage(options)
        copyDefaultProject();
    });
};

var createNpmPackage = function (options) {
    var hangrPackage = require(__dirname + '/../../package.json');
    options.author = concatAuthorAndEmail(options.author, options.email);
    var packageJson = {
        name: options.appName,
        description: options.description,
        version: options.version,
        author: options.author,
        main: 'server.js',
        repository: {
            type: options.repositoryType,
            url: options.repositoryUrl
        },
        dependencies: {
            hangr: '^' + hangrPackage.version
        },
        scripts: {
            prestart: 'npm install'
        },
        bugs: {
            url: options.bugsUrl
        },
        engines: {
            node: hangrPackage.engines.node
        },
        license: options.license
    };
    fs.writeJson('./package.json',
        packageJson,
        function (err) {
            if (err)
                console.log(err);
            else console.log('Created: package.json');
        }
    );
};

var concatAuthorAndEmail = function (author, email) {
    if (email) {
        if (author.length !== 0) {
            author += " ";
        }
        author += '<' + email + '>';
    }
    return author;
};

var copyDefaultProject = function() {
    fs.copy(__dirname + '/defaultStructure', '.', function (err) {
        if (err)
            return console.error(err);
        console.log("Copied Default Project Structure");
    })
};


if (process.env.NODE_ENV === 'test') {
    module.exports._private = {
        concatAuthorAndEmail: concatAuthorAndEmail
    };
}