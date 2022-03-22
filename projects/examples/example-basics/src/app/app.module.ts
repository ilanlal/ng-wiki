import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WikiClientServiceSample } from 'ng-wiki';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WikiClientServiceSample],
  bootstrap: [AppComponent]
})
export class AppModule { }
