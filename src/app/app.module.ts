import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule, // ✅ Import FormsModule here
    TopNavComponent,
    SideMenuComponent,
    DashboardComponent,
  ],
  bootstrap: [TopNavComponent]
})
export class AppModule {}