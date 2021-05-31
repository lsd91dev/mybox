import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToggleMenuComponent } from './shared/components/toggle-menu/toggle-menu.component';
import { NoProjectsComponent } from './shared/components/no-projects/no-projects.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [ SidebarComponent,ToggleMenuComponent, NoProjectsComponent, LoadingComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ SidebarComponent, ToggleMenuComponent, NoProjectsComponent, LoadingComponent ]
})
export class SharedComponentsModule { }
