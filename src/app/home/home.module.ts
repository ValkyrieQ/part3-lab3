import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [NavbarComponent, MainContentComponent, HomeComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, MainContentComponent],
})
export class HomeModule {}
