import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  public title:string = "Class Binding";
  public successClass:string = "text-success";
  public hasError:boolean = true;
  public isSpecial:boolean = true;
  public highlightColor = "Blue";
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyle ={
    color: 'purple',
    fontStyle:'italic',
    fontSize:'1.2rem'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
