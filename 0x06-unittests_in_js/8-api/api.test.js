const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Index page', function () {
  let serverInstance;

  before(function (done) {
    serverInstance = app.listen(7865, () => {
      console.log('Server started');
      done();
    });
  });

  after(function (done) {
    serverInstance.close(() => {
      console.log('Server stopped');
      done();
    });
  });

  it('should return status code 200', function (done) {
    request.get(`${BASE_URL}/`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function (done) {
    request.get(`${BASE_URL}/`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
