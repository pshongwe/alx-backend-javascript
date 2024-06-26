/**
 * Class representing a car.
 */
export default class Car {
  /**
   * Create a car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Get the brand of the car.
   * @return {string} The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the brand of the car.
   * @param {string} value - The brand of the car.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Get the motor of the car.
   * @return {string} The motor of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Set the motor of the car.
   * @param {string} value - The motor of the car.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Get the color of the car.
   * @return {string} The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Set the color of the car.
   * @param {string} value - The color of the car.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Get the species of the class.
   * @return {Function} The constructor of the class.
   */
  static get [Symbol.clone]() {
    return this;
  }

  /**
   * Clone the car.
   * @return {Car} A new Car object.
   */
  cloneCar() {
    const Clone = this.constructor[Symbol.clone];
    return new Clone(this._brand, this._motor, this._color);
  }
}
