'use strict';
var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('generate/create', function () {

    it('can concatenate author and email', function (done) {
        var create = require('../../bin/generate/create');
        var author = 'AUTHOR';
        var email = 'EMAIL';

        var result = create._private.concatAuthorAndEmail(author, email);
        expect(result).to.equal(author + ' <' + email + '>');

        done();
    });

    it('can ignore email when concatenating author and email', function (done) {
        var create = require('../../bin/generate/create');
        var author = 'AUTHOR';
        var email = '';

        var result = create._private.concatAuthorAndEmail(author, email);
        expect(result).to.equal(author);

        done();
    });

    it('can ignore author when concatenating author and email', function (done) {
        var create = require('../../bin/generate/create');
        var author = '';
        var email = 'EMAIL';

        var result = create._private.concatAuthorAndEmail(author, email);
        expect(result).to.equal('<' + email + '>');

        done();
    });
});