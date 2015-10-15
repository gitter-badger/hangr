var Hangr = require('..');
var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('index', function () {

    it('contains a hapi server', function (done) {

        expect(Hangr.Hapi).not.to.be.null();
        done();
    });
});
