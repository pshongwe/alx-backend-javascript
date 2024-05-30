/**
 * Represents Holberton Course
 */
export default class HolbertonCourse {
  /**
   * Creates new @see {@link HolbertonCourse}.
   *
   * @param {String} name - Name of the course.
   * @param {Number} length - How long the course is.
   * @param {String[]} students - Students (names) taking the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students taking the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students taking the course.
   */
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
