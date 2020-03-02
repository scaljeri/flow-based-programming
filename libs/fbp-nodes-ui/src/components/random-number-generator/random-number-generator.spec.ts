import { RandomNumberGenerator } from './random-number-generator';

describe('fbp-random-number-generator', () => {
  it('builds', () => {
    expect(new RandomNumberGenerator()).toBeTruthy();
  });
});
