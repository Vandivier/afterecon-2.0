import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ae2TableComponent } from './ae2-table/ae2-table.component';
import { Ae2TableVerticalScrollComponent } from './ae2-table-vertical-scroll/ae2-table-vertical-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    Ae2TableComponent,
    Ae2TableVerticalScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
