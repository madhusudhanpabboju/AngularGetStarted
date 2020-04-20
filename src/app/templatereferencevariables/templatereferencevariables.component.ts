import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-templatereferencevariables',
  templateUrl: './templatereferencevariables.component.html',
  styleUrls: ['./templatereferencevariables.component.css']
})
export class TemplatereferencevariablesComponent implements OnInit {
  public title:string ="Template Reference Variables";
  public logValue:string ="";
  public referHtmlEleValue:string ="";
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value){
    this.logValue = value;
  }
  completeReferHtmlElement(value){
    this.referHtmlEleValue = value;
  }
}
