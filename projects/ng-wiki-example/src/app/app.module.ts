import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WikiGridListComponent } from './components/wiki-grid-list/wiki-grid-list.component';
import { WikiPageComponent } from './components/wiki-page/wiki-page.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WikiGridListComponent,
    WikiPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
