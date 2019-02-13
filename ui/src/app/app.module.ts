import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ae2TableComponent } from './ae2-table/ae2-table.component';
import { Ae2TableVerticalScrollComponent } from './ae2-table-vertical-scroll/ae2-table-vertical-scroll.component';
import { ServiceStateService } from './service-state/service-state.service';
import { ServiceBaseService } from './service-base/service-base.service';
import { ServiceUrlManagerService } from './service-url-manager/service-url-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    Ae2TableComponent,
    Ae2TableVerticalScrollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceBaseService, ServiceStateService, ServiceUrlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
