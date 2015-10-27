#!/usr/bin/env node
'use strict';
var cli = require('commander'),
    create = require('./generate/create'),
    fs = require('fs'),
    npm = require('npm');

cli.version('v' + require('../package.json').version);

cli.command('create [appName]')
    .description('create a new application')
    .action(function (appName) {
        create.interactiveCreate(appName);
    });

cli.command('start')
    .description('run this existing application')
    .action(function (env) {
        npm.load(function (err) {
            if (err)
                return console.log(err);
            npm.commands.install([], function (er, data) {
                if (er)
                    return console.log(er);
                npm.commands.start([], function (er, data) {
                    if (er)
                        return console.log(er);
                });
            });
            npm.on("log", function (message) {
                // log the progress of the installation
                console.log(message);
            });
        });

    });


if (process.argv.length > 2)
    cli.parse(process.argv);
else {
    fs.access(process.cwd() + '/server.js', fs.F_OK, function (err) {
        if(err) {
            console.error('No hangr project exists. Try running "hangr create <appName>"');
            process.argv.push('--help');
        } else {
            process.argv.push('start');
        }
        cli.parse(process.argv);
    });
}