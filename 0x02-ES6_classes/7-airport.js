/**
 * Class representing an airport.
 */
export default class Airport {
  /**
   * Create an airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Get the name of the airport.
   * @return {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the code of the airport.
   * @return {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Return the airport code as the default string description.
   * @return {string} The airport code.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
