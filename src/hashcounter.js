exports.HashCounter = function () {
    this.add = function(key) {
      if (this[key] == undefined) {
        this[key] = 1;
        return true;
      }
      this[key] += 1;
      return false;
    };
  
    this.get = function(key) {
      if (this[key] == undefined) {
        return 0;
      }
      return this[key];
    };
  
    this.reset = function(key) {
      this[key] = 0;
    };
};
