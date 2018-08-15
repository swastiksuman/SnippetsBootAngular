import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ListSnippetsComponent } from './list-snippets/list-snippets.component';
import { AddSnippetsComponent } from './add-snippets/add-snippets.component';
import { ViewComponent } from './view-snippets/view-snippets.component';
import { HttpModule } from '@angular/http';
import { SnippetsServices } from './list-snippets/snippets.services';


@NgModule({
  declarations: [
    AppComponent,
    ListSnippetsComponent,
    AddSnippetsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SnippetsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }