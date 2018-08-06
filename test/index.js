import Component from '../src'
import {assert} from 'chai'

describe('my-test', function () {

    before(function () {
        this.jsdom = require('jsdom-global')();
    });

    after(function () {
        setTimeout(()=>{
            this.jsdom()
        },100);
    });

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    it('should an object', function () {
        assert.typeOf(Component, 'object');
    });

});