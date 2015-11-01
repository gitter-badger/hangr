var Hangr = require('../lib/.');
var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('Hangr', function () {

    it('gets initialize with defaults', function (done) {
        expect(Hangr.config.port).to.equal(55555);
        expect(Hangr.config.spa.enabled).to.be.true();
        expect(Hangr.config.spa.base).to.equal('spa');
        expect(Hangr.hapiServer).to.not.be.null();
        expect(Hangr.hapiServer).to.be.an.instanceof(Hapi.Server);
        done();
    });

    it('can start and stop a hapiServer', function (done) {
        var hangr = new Hangr.Hangr();
        var started = false;
        var stopped = false;

        hangr.start(function (err) {
            expect(err).to.not.exist();
            started = true;
            hangr.stop(function () {
                stopped = true;
                expect(started, 'Failed to start').to.be.true();
                expect(stopped, 'Failed to stop').to.be.true();
                done();
            });
        });
    });
});