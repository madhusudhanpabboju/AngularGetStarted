import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  public mainTitle:string = "Component Interaction";
  public title:string = "Parent Component";
  public nameFromParent:string = "Madhu - Data passing from Parent component";

  public message:string; // this value is coming from child component


  constructor() { }

  ngOnInit(): void {
  }

}
