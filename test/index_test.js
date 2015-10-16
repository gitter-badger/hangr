var Hangr = require('..');
var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('index', function () {

    it('contains a hapi server', function (done) {

        Hangr.start();
        expect(Hangr.Hapi).not.to.equal(null);
        expect(Hangr.Hapi.info.port).to.equal(55555);
        Hangr.stop();
        done();
    });
});
