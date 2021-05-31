import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent{

  @Output() sidebarEmitter: EventEmitter<boolean>;
  constructor() { this.sidebarEmitter = new EventEmitter() }

  emitDisplaySidebar(){ 
    const menu = document.querySelector('#menu');
    menu.classList.toggle('menu_top');
    this.sidebarEmitter.emit();
  }
}
