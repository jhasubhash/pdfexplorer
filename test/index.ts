import { strict as assert } from 'assert';
import pdfParser from '../src/index'
import { it, describe } from 'mocha'

describe('String', () => {
  describe('match', () => {
    it('should be equal', () => {
      assert.equal(pdfParser("hello"), "hello");
    });
  });
  describe('not match', () => {
    it('should not be equal', () => {
      assert.notEqual(pdfParser("hello"), "world");
    });
  });
});