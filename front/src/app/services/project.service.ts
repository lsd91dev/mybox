import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private API_URL: string;

  constructor(private http: HttpClient) { 
    this.API_URL = environment.apiUrl;
   }

  createProject(form: FormGroup){
    console.log(form);
    this.http.post(`${ this.API_URL }project/new`, form)
    .subscribe( data => {
      console.log(data)
    },
    error => {
      console.log(error)
    });
  }
}
