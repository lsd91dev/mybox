import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedComponentsModule } from './shared-components.module';
import { ProjectModule } from './pages/project/project.module';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProjectModule,
    HomeModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
