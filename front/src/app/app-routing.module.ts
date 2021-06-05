import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', loadChildren: ()=> import('./pages/project/project-routing.module').then( m => m.ProjectRoutingModule ) }
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
