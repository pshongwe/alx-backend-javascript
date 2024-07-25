const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.callCount).to.be.equal(1);
    stub.restore();
    consoleSpy.log.restore();
  });
});
