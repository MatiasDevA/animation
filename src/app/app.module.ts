import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { AboutComponent } from './about/about.component';
import { DashboradComponent } from './dashborad/dashborad.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent,
    AboutComponent,
    DashboradComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
