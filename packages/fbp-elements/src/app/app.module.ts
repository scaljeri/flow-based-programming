import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxsDispatchPluginModule } from "@ngxs-labs/dispatch-decorator";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';

import { MainComponent } from './components/main/main.component';
import { NodeComponent } from './components/node/node.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { NgxsModule } from '@ngxs/store';
import { FbpState } from './store/state';

@NgModule({
  declarations: [
    MainComponent,
    NodeComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
	  NgxsModule.forRoot([FbpState], { developmentMode: true }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
     name: 'NGXS store',
     disabled: environment.production
   })
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
	  let custom = createCustomElement(MainComponent, { injector: this.injector });
	  customElements.define('fbp-main', custom);

	  custom = createCustomElement(NodeComponent, { injector: this.injector });
	  customElements.define('fbp-node', custom);
  }
}
