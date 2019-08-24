import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { LatestimageComponent } from './latestimage/latestimage.component';
import { LogontextComponent } from './logon/logontext/logontext.component';
import { ButtonComponent } from './button/button.component';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { DashboardelementsComponent } from './dashboard/dashboardelements/dashboardelements.component';
import { DashboardelementsrightComponent } from './dashboard/dashboardelementsright/dashboardelementsright.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    DashboardComponent,
    StatsComponent,
    LatestimageComponent,
    LogontextComponent,
    ButtonComponent,
    InputfieldComponent,
    DashboardelementsComponent,
    DashboardelementsrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
