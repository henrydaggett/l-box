import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-box',
  styleUrl: 'v-box.css',
  shadow: true,
})
export class VBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
