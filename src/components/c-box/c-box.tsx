import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'c-box',
  styleUrl: 'c-box.css',
  shadow: true,
})
export class CBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
