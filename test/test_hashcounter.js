//@ts-check

const assert = require("assert");
const hashcounter = require("../src/hashcounter");
const key1 = "A";
const key2 = "B";
const key3 = "C";

describe('HashCounter', function() {
    describe('add()', function() {
      it('should return false when first time adding key', function() {
        let counter = new hashcounter.HashCounter();
        assert.equal(counter.add(),false);
      });
      it('should return true when not first time adding key', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        assert.equal(counter.add(key1),true);
      });
    });
    describe('get()', function() {
      it('should return 0 when key not added', function() {
        let counter = new hashcounter.HashCounter();
        assert.equal(counter.get(key1), 0);
      });
      it('should not return 0 when key added (manual add)', function() {
        let counter = new hashcounter.HashCounter();
        counter[key1] = 3;
        assert.notEqual(counter.get(key1), 0);
      });
    });
    describe('add() + get()', function() {
      it('should equal 1 when key added 1 time', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        assert.equal(counter.get(key1), 1);
      });
      it('should equal 1 when key added 2 times', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        counter.add(key1);
        assert.equal(counter.get(key1), 2);
      });
    });
    describe('reset()', function() {
      it('should equal 0 when any key reset', function() {
        let counter = new hashcounter.HashCounter();
        counter.reset(key1);
        assert.equal(counter[key1], 0);
      });
    });
    describe('add() + reset()', function() {
      it('should equal 0 when key add 1 then reset', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        counter.reset(key1);
        assert.equal(counter[key1], 0);
      });
      it('should equal 0 when key add 2 then reset', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        counter.add(key1);
        counter.reset(key1);
        assert.equal(counter[key1], 0);
      });
    });
    describe('add() + reset() + get()', function() {
      it('should equal 1 when key add 1 and equal 0 when reset', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        assert.equal(counter.get(key1), 1);
        counter.reset(key1);
        assert.equal(counter.get(key1), 0);
      });
    });
    describe('add() + get() with multiple keys', function() {
      it('should equal 1 when adding key1 and 0 when not adding key2', function() {
        let counter = new hashcounter.HashCounter();
        counter.add(key1);
        assert.equal(counter.get(key1), 1);
        assert.equal(counter.get(key2), 0);
      });
    });
  });