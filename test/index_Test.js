var Hangr = require('../.');
var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('Hangr', function () {

    it('gets initialize with a defaults', function (done) {
        expect(Hangr.port).to.equal(55555);
        expect(Hangr.spa.enabled).to.be.true();
        expect(Hangr.spa.base).to.equal('public');
        expect(Hangr.spa.dirs).to.include(['css', 'js', 'img', 'views']);
        expect(Hangr.hapiServer).to.not.be.null();
        expect(Hangr.hapiServer).to.be.an.instanceof(Hapi.Server);
        done();
    });

    it('have its port set', function (done) {
        var port = 12345;
        var hangr = new Hangr.Hangr(port);

        expect(hangr.port).to.equal(port);

        port = 54321;
        hangr.port = port;

        expect(hangr.port).to.equal(port);
        done();
    });

    it('can start and stop a hapiServer', function (done) {
        var hangr = new Hangr.Hangr();
        hangr.disableSpa();
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