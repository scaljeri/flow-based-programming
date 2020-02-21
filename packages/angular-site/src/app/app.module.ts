import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeComponent } from './components/nodes/code/code.component';
import { TestTestComponent } from './components/nodes/test-test/test-test.component';
import { RandomNumberGeneratorComponent } from './components/nodes/random-number-generator/random-number-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    TestTestComponent,
    RandomNumberGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
