import Building from './5-building';

/**
 * Class representing a sky-high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Create a sky-high building.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Get the number of floors.
   * @return {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Return an evacuation warning message.
   * @return {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
