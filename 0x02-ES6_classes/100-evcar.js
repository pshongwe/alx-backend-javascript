import Car from './10-car';

/**
 * Class representing an electric vehicle car.
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Create an electric vehicle car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The range of the car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Get the range of the car.
   * @return {string} The range of the car.
   */
  get range() {
    return this._range;
  }

  /**
   * Set the range of the car.
   * @param {string} value - The range of the car.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Clone the car.
   * @return {Car} A new Car object.
   */
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
