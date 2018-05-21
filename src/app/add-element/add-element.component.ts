import { Component, OnInit } from '@angular/core';
import { Add_element } from '../add_element' ;

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  newElement:Add_element ={
    id: 1,
    element_name: 'House'
  };

  constructor() { }

  ngOnInit() {
  }

}
