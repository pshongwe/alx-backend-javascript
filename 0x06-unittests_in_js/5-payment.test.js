const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleSpy.restore();
    });

    it('should log the correct message when called with 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it('should log the correct message when called with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
    });
});
