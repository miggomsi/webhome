import { Component, OnInit } from '@angular/core';
import { Dashcomponent } from '../dashcomponent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  home = 'Home';
  shopping = 'Shopping'  
  calendar = 'Calendar'
  tasks = 'Tasks'
  notes = 'Notes'
  economy = 'Economy'
  real_state = 'Properties'
  backend = 'backend'

  Add:  Dashcomponent = {
    id: 1,
    title: 'Add',
    type: 'Note',
    comment: ''
  };

  
  constructor() { }

  ngOnInit() {
    // To put initialization logic of the component. When the component is created this is the first method to call to.
    // This means that if we want to perform weird stuff at initializaiton point it will be done here
    
  }

}
