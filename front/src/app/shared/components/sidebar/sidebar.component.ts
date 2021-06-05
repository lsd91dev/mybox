import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  private width_screen: number;
  private mobile_screen: boolean;
  private sidebar: HTMLElement;
  constructor(private _router: Router ) { }
  
  
  ngOnInit(): void { 
    this.sidebar = document.querySelector('#sidebar');
    this.width_screen = window.innerWidth;
    this.checkWindowSize();
  }

  @HostListener("window:resize")
  onResize(){ 
    this.width_screen = window.innerWidth;
    if( this.width_screen > 500) {  
      this.sidebar.classList.remove('sidebar_invisible'); 
      this.sidebar.classList.remove('sidebar_transition');
      this.sidebar.classList.remove('displaySidebar');
      this.mobile_screen = false;
      return; 
    }
    this.sidebar.classList.add('sidebar_invisible');
    this.mobile_screen = true;
  }

  checkWindowSize(){
  if ( this.width_screen > 500){ return; }
  this.sidebar.classList.add('sidebar_invisible');
  this.mobile_screen = true;

  }

  displaySidebar(){
    if( this.mobile_screen ){ this.sidebar.classList.add('sidebar_transition') }
    this.sidebar.classList.toggle('displaySidebar');
  }

}