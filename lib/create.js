'use strict';

var fs = require('fs');


module.exports.all = function (name, options) {
    var createSpa = !options.no-spa || true;
    var createApi = !options.no-api || true;
    server(name);
    if(createSpa)
        spa();
    if(createApi)
        api();
};

var server = module.exports.server = function(name) {
    var filename = 'server.js';
    var content = 'Hello ' + name + '!';
    createFile(filename, content);

};

var spa = module.exports.spa = function () {
    var directory = 'spa/';
    mkdir(directory);
    createFile(directory + 'index.html', '');
};

var api = module.exports.api = function () {
    var directory = 'api/';
    mkdir(directory);
};

var createFile = function(path, content) {
    fs.writeFile(path, content, function (err) {
        if (err)
            return console.log(err);
        console.log('Created: ' + path);
    });
};

var mkdir = function(path) {
    fs.mkdir(path, function(err) {
        if (err)
            return console.log(err);
        console.log('Created: ' + path);
    });
};