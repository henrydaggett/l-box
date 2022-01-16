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

  @Prop() spacing: string;

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
        style={{ gap: this.spacing }}
      >
        <slot></slot>
      </Host>
    );
  }

}
