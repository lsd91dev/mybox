import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../shared-components.module';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, SharedComponentsModule ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
