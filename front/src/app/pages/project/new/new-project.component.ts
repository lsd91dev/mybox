import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  formProject: FormGroup;
  constructor(private fb: FormBuilder, private projectService: ProjectService) {  }

  ngOnInit(): void {
    this.formProject = this.fb.group({
      name: [ '', Validators.required ],
      github: [''],
      description: ['']
    })
  }

  mostrarFormulario() {
    if( !this.formProject.valid ){
      this.formProject.markAllAsTouched();
      return; 
    }
    this.projectService.createProject(this.formProject.value);
  }


  getProjectname() { return this.formProject.get('name') }

}
