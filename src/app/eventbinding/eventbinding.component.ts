import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public title:string = "Event Binding";
  public greeting:string ="";
  public templateGreeting:string ="";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.greeting = "Welcome to Event Binding!"
  }
  onClickPassEvent(event){
    console.log(event);
  }
}
