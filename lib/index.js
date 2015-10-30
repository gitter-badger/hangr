'use strict';

var fs = require('fs-extra'),
    Hapi = require('hapi'),
    Hoek = require('hoek');

var CONFIG_FILENAME = "hangr.json";

function Hangr() {
    this.config = {
        port: 55555,
        spa: {
            enabled: true,
            base: 'spa'
        }
    };
    _loadConfigFile.call(this);
    this.hapiServer = new Hapi.Server();
}

function _loadConfigFile() {
    var configFilePath = process.cwd() + '/' + CONFIG_FILENAME;
    try {
        fs.accessSync(configFilePath);
        console.log('Loading hangr.json...');
        var fileConfig = fs.readJsonSync(configFilePath);
        this.config = Hoek.applyToDefaults(this.config, fileConfig);
    } catch(ex) {
        console.log('No hangr.json configuration file.');
    }
    console.log('hangr config: ' + JSON.stringify(this.config));
}

function _enableSpaRoutes() {
    var AngularRoutes = require('./plugins/spaRoutes');
    console.log('Enabling SPA Routes...');
    this.hapiServer.register({
        register: AngularRoutes,
        options: this.config.spa
    }, function () {});
}

Hangr.prototype.start = function (callback) {
    this.hapiServer.connection({port: this.config.port});
    if (this.config.spa.enabled) {
        _enableSpaRoutes.call(this);
    }
    var hapiServer = this.hapiServer;
    this.hapiServer.start(function () {
        console.log('Server running at: ' + hapiServer.info.uri);
        (callback || function () {
        })();
    });
};

Hangr.prototype.stop = function (callback) {
    this.hapiServer.stop(function () {
        console.log('Goodbye');
        (callback || function () {
        })();
    });
};

Hangr.prototype.Hangr = Hangr;

var hangr = module.exports = new Hangr();