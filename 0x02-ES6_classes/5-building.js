/**
 * Class representing a building.
 */
export default class Building {
  /**
   * Create a building.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  /**
   * Get the square footage.
   * @return {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }
}
