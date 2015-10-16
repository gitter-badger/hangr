var Hangr = require('..');
var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('index', function () {

    it('contains a hapi server that can be started and stopped', function (done) {

        var port = 12345;

        Hangr.connections(port);
        Hangr.start();
        expect(Hangr.HapiServer).not.to.equal(null);
        expect(Hangr.HapiServer.info.port).to.equal(port);
        Hangr.stop();
        done();
    });
});
