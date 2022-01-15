import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'h-box',
  styleUrl: 'h-box.css',
  shadow: true,
})
export class HBox {

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
