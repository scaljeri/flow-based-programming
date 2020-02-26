import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { MainComponent } from './components/main/main.component';
import { NodeComponent } from './components/node/node.component';
import { ConnectionComponent } from './components/connection/connection.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
  	const el = createCustomElement(MainComponent, { injector: this.injector });
    customElements.define('fbp-main', el);
  }
}
