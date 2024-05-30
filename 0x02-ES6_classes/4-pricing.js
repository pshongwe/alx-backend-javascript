import Currency from './3-currency';

/**
 * Class representing pricing.
 */
export default class Pricing {
  /**
   * Create a pricing.
   * @param {number} amount - The amount.
   * @param {Currency} currency - The currency.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get the amount.
   * @return {number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount.
   * @param {number} value - The amount.
   * @throws {TypeError} If the amount is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Get the currency.
   * @return {Currency} The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency.
   * @param {Currency} value - The currency.
   * @throws {TypeError} If the currency is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Display the full price.
   * @return {string} The full price.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Convert price.
   * @param {number} amount - The amount.
   * @param {number} conversionRate - The conversion rate.
   * @return {number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
