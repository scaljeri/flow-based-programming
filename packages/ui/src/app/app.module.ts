import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxsDispatchPluginModule } from "@ngxs-labs/dispatch-decorator";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';

import { MainComponent } from './components/main/main.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { NgxsModule } from '@ngxs/store';
import { FbpState } from './store/state';
import { NodeHeaderComponent } from './components/node-header/node-header.component';
import { NodeComponent } from './components/node/node.component';
import { RandomNumberGeneratorComponent } from './components/nodes/random-number-generator/random-number-generator.component';
import { LoggerComponent } from './components/nodes/logger/logger.component';

@NgModule({
  declarations: [
    MainComponent,
    NodeComponent,
    ConnectionComponent,
    NodeHeaderComponent,
    RandomNumberGeneratorComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([FbpState], {
      developmentMode: true,
    }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'NGXS store',
      disabled: environment.production
    })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    this.createCustomElement(MainComponent, 'main');
    this.createCustomElement(NodeComponent, 'node');
    this.createCustomElement(RandomNumberGeneratorComponent, 'random-number-generator');
    this.createCustomElement(LoggerComponent, 'logger');
  }

  createCustomElement(ClassRef: any, name: string): void {
    const fullName = `fbp-${name}`;

    if (!customElements.get(fullName)) {
      const custom = createCustomElement(ClassRef, { injector: this.injector });
      customElements.define(fullName, custom);
    }
  }
}

