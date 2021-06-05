import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from 'src/app/pages/project/new/new-project.component';

const ROUTES: Routes= [
  { path: 'new', component: NewProjectComponent },
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
