const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Index page', function () {
  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
