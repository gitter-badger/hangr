#!/usr/bin/env node
'use strict';
var cli = require('commander'),
    create = require('./generate/create'),
    fs = require('fs'),
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

if (process.argv.length > 2) {
    cli.parse(process.argv);
} else {
    fs.access(process.cwd() + '/server.js', fs.F_OK, function (err) {
        if (err) {
            console.error('No hangr project exists. Try running "hangr create <appName>"');
            process.argv.push('--help');
        } else {
            process.argv.push('start');
        }
        cli.parse(process.argv);
    });
}