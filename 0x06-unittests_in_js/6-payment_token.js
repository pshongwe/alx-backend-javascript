/**
 * Function to simulate getting a payment token from an API
 * @param {boolean} success - Indicates if the API request should succeed
 * @returns {Promise<Object>} - A promise that resolves with the API response if successful
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(); // or reject(new Error('Failed'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;
