import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './shared-components.module';
import { ProjectModule } from './modules/project/project.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ProjectModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
