/**
 * Class representing a Holberton class.
 */
export default class HolbertonClass {
  /**
   * Create a Holberton class.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Get the size of the class.
   * @return {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Get the location of the class.
   * @return {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Return the size when the class is cast into a Number.
   * @return {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Return the location when the class is cast into a String.
   * @return {string} The location of the class.
   */
  toString() {
    return this._location;
  }
}
