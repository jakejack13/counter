//@ts-check

/**
 * A counter of objects implemented with a hash table
 */
exports.HashCounter = function () {
  /**
   * Increments the count of the key
   * @param {*} key the key to increment the count of
   * @returns {boolean} true if the key was already added in the counter, false otherwise
   */  
  this.add = function(key) {
      if (this[key] == undefined) {
        this[key] = 1;
        return false;
      }
      this[key] += 1;
      return true;
    };
  
    /**
     * Returns the count of the key
     * @param {*} key the key to return the count of
     * @returns {number} the count of the key
     */
    this.get = function(key) {
      if (this[key] == undefined) {
        return 0;
      }
      return this[key];
    };
  
    /**
     * Resets the count of the key
     * @param {*} key the key to reset
     */
    this.reset = function(key) {
      this[key] = 0;
    };
};
