#!/usr/bin/env node
'use strict';

var CWD = process.cwd();

var cli = require('commander'),
    create = require('../lib/build/create'),
    fs = require('fs');

cli.version('v' + require('../package.json').version);

cli.command('create [name]')
    .description('create a new application')
    .action(function(name) {
        create.all(CWD, name);
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