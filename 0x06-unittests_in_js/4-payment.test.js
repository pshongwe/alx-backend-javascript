const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;
    let stub;

    beforeEach(function () {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with type = SUM, a = 100, b = 20', function () {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message', function () {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    });
});
