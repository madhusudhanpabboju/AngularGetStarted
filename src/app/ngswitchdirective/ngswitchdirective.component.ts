import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-ngswitchdirective',
  templateUrl: './ngswitchdirective.component.html',
  styleUrls: ['./ngswitchdirective.component.css']
})
export class NgswitchdirectiveComponent implements OnInit {
  public title:string = "ngSwitch Directive";
  public color:string = "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
