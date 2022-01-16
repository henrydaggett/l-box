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

  @Prop() left: boolean;

  @Prop() right: boolean;

  render() {
    return (
      <Host
        class={{
          'spread': this.spread,
          'fill': this.fill,
          'wrap': this.wrap,
          'left': this.left,
          'right': this.right
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
