import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'h-box',
  styleUrl: 'h-box.css',
  shadow: true,
})
export class HBox {

  @Prop() spread: boolean = false;

  @Prop() fill: boolean = false;

  @Prop() wrap: boolean = false;

  @Prop() top: boolean = false;

  @Prop() bottom: boolean = false;

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
      >
        <slot></slot>
      </Host>
    );
  }

}
