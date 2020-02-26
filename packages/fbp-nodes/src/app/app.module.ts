import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RandomNumberGeneratorComponent } from './components/blocks/random-number-generator/random-number-generator.component';

@NgModule({
  declarations: [
    RandomNumberGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const el = createCustomElement(RandomNumberGeneratorComponent, { injector: this.injector });
    customElements.define('fbp-random-number-generator', el);
  }
}
