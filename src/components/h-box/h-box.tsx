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

  @Prop() spacing: string;

  render() {
    return (
      <Host
        class={{
          'spread': this.spread,
          'fill': this.fill,
          'wrap': this.wrap,
          'top': this.top,
          'bottom': this.bottom
        }}
        style={{gap: this.spacing}}
      >
        <slot></slot>
      </Host>
    );
  }

}
