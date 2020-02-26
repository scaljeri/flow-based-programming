import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { NodeHeaderComponent } from './components/node-header/node-header.component';
import { NodeFooterComponent } from './components/node-footer/node-footer.component';

@NgModule({
  declarations: [
    NodeHeaderComponent,
    NodeFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    let el = createCustomElement(NodeHeaderComponent, { injector: this.injector });
    customElements.define('fbp-node-header', el);

    el = createCustomElement(NodeFooterComponent, { injector: this.injector });
    customElements.define('fbp-node-footer', el);
  }
}
