const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        try {
          assert.deepStrictEqual(response, { data: 'Successful response from the API' });
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch(done);
  });

  it('should return nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        try {
          assert.strictEqual(response, undefined);
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch(done);
  });
});
