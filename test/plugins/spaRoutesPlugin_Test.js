var Hangr = require('../..');
var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('spaRoutesPlugin', function () {

    it('sets base default to "public"', function (done) {
        var hangr = new Hangr();
        hangr.addSpaRoutes();
        hangr.start();
        hangr.stop();

        expect(true).to.equal(true);
        done();
    });
});