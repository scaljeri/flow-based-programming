import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fbp-random-number-generator',
  styleUrl: 'random-number-generator.scss',
  shadow: true
})
export class RandomNumberGenerator {
dd
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
