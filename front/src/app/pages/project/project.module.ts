import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewProjectComponent } from 'src/app/pages/project/new/new-project.component';
import { SharedComponentsModule } from 'src/app/shared-components.module';


@NgModule({
  declarations: [ NewProjectComponent ],
  imports: [ CommonModule, SharedComponentsModule, ReactiveFormsModule, FormsModule ],
  exports: [ NewProjectComponent ]
})
export class ProjectModule { }
