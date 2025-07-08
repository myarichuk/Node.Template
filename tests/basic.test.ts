import { add, multiply } from '../src/index';

describe('math helpers', () => {
  it('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('multiplies numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
