var Hangr = require('../.');
var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('hangr', function () {

    it('can create a hapiServer with a port number', function (done) {
        var hangr = new Hangr();

        expect(hangr.hapiServer).to.not.be.null();
        expect(hangr.hapiServer).to.be.an.instanceof(Hapi.Server);
        expect(hangr.hapiServer.info.port).to.equal(55555);
        done();
    });

    it('can create a hapiServer with a specified port number', function (done) {
        var port = 12345;
        var hangr = new Hangr({port: port});

        expect(hangr.hapiServer).to.not.be.null();
        expect(hangr.hapiServer).to.be.an.instanceof(Hapi.Server);
        expect(hangr.hapiServer.info.port).to.equal(port);
        done();
    });

    it('can start and stop a hapiServer', function (done) {
        var hangr = new Hangr();
        var started = false;
        var stopped = false;

        hangr.start(function (err) {
            expect(err).to.not.exist();
            started = true;
            hangr.stop(function() {
                stopped = true;
                expect(started, 'Failed to start').to.be.true();
                expect(stopped, 'Failed to stop').to.be.true();
                done();
            });
        });
    });
});