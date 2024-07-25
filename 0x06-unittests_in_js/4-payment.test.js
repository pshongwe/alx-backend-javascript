const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(function () {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);
    stub.restore();
    consoleSpy.restore();
  });
});
