import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'v-box',
  styleUrl: 'v-box.css',
  shadow: true,
})
export class VBox {

  @Prop() spread: boolean;

  @Prop() fill: boolean;

  @Prop() wrap: boolean;

  @Prop() top: boolean;

  @Prop() bottom: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
