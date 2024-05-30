/**
 * Class representing a currency.
 */
export default class Currency {
  /**
   * Create a currency.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   */
  constructor (code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Get the code of the currency.
   * @return {string} The code of the currency.
   */
  get code () {
    return this._code;
  }

  /**
   * Set the code of the currency.
   * @param {string} value - The code of the currency.
   * @throws {TypeError} If the code is not a string.
   */
  set code (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Get the name of the currency.
   * @return {string} The name of the currency.
   */
  get name () {
    return this._name;
  }

  /**
   * Set the name of the currency.
   * @param {string} value - The name of the currency.
   * @throws {TypeError} If the name is not a string.
   */
  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Display the full currency information.
   * @return {string} The full currency information.
   */
  displayFullCurrency () {
    return `${this.name} (${this.code})`;
  }
}
