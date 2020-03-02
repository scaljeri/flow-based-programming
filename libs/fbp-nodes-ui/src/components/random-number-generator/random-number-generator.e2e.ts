import { newE2EPage } from '@stencil/core/testing';

describe('fbp-random-number-generator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fbp-random-number-generator></fbp-random-number-generator>');

    const element = await page.find('fbp-random-number-generator');
    expect(element).toHaveClass('hydrated');
  });
});
