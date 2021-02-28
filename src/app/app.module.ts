import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BackendService } from './backend.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CatalogModule, HomeModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
