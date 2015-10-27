#!/usr/bin/env node
'use strict';
var cli = require('commander'),
    create = require('../lib/building/create'),
    fs = require('fs');

cli.version('v' + require('../package.json').version);

cli.command('create [appName]')
    .description('create a new application')
    .action(function(appName) {
        create.interactiveCreate(appName);
    });

cli.command('*')
    .action(function(env) {
        if(fs.existsSync('server.js')) {
            cli.outputHelp();
        } else {
            console.log('TODO: Deploy');
        }
    });

cli.parse(process.argv);