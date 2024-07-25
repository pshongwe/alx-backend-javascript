const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    const stub = sinon.spy(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(stub.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calculateNumber.callCount).to.be.equal(1);
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.callCount).to.be.equal(1);
    stub.calculateNumber.restore();
    consoleSpy.log.restore();
  });
});
