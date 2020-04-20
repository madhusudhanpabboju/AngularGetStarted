import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public title:string ="Interpolation";
  public name:string ="Madhu";
  public gethref:string = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.name;
  }

}
