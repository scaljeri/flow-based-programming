import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
  TestComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap(): void {
    const el = createCustomElement(TestComponent, { injector: this.injector });
    customElements.define('fbp-basic-test', el);
  }
}
