import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WikiClientService } from 'ng-wiki';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiPageComponent } from './wiki-page/wiki-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WikiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
