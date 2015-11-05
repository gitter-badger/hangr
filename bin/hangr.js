#!/usr/bin/env node
'use strict';
var cli = require('commander'),
    create = require('./generate/create'),
    fs = require('fs-extra'),
    npm = require('npm');

var addNpmCommand = function (command, description) {
    cli.command(command)
        .description(description)
        .action(function () {
            npm.load({}, function (err) {
                if (err) {
                    return console.log(err);
                }
                npm.commands.run([command]);
            });
        });
};

cli.version('v' + require('../package.json').version);

cli.command('create [appName]')
    .description('create a new application')
    .action(function (appName) {
        create.interactiveCreate(appName);
    });

addNpmCommand('start', 'run application in "development" mode');
addNpmCommand('deploy', 'run application in "production" mode');


if (process.argv.length < 3) {
    var appPath = process.cwd();
    try {
        var projectConfig = require(appPath + '/package.json');
        if(!projectConfig.main) {
            appPath += '/server.js'
        }
        appPath += '/' + projectConfig.main;
        fs.accessSync(appPath);
        process.argv.push('start');
    } catch(ex) {
        console.error('No hangr project exists (' + appPath + ').');
        console.error('Try running "hangr create <appName>"');
        process.argv.push('--help');
    }
}

cli.parse(process.argv);