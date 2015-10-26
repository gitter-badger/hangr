'use strict';

var fs = require('fs-extra');


module.exports.all = function (cwd, name) {
    console.log(cwd);
    fs.copy(__dirname + '/defaults', cwd, function(err) {
        if (err)
            return console.error(err);
        console.log('initialized project');
    });
};