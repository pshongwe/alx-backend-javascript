const request = require('request');
const { expect } = require('chai');
const BASE_URL = 'http://localhost:7865';

describe('Index page', function () {
  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 200 for valid ID', function (done) {
    request.get(`${BASE_URL}/cart/12`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for valid ID', function (done) {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      if (error) return done(error);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return status code 404 for invalid ID', function (done) {
    request.get(`${BASE_URL}/cart/hello`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 200 for /available_payments', function (done) {
    request.get(`${BASE_URL}/available_payments`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct JSON for /available_payments', function (done) {
    request.get(`${BASE_URL}/available_payments`, (error, response, body) => {
      if (error) return done(error);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('should return status code 200 for POST /login', function (done) {
    const options = {
      url: `${BASE_URL}/login`,
      method: 'POST',
      json: { userName: 'Betty' }
    };
    
    request(options, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for POST /login', function (done) {
    const options = {
      url: `${BASE_URL}/login`,
      method: 'POST',
      json: { userName: 'Betty' }
    };
    
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
