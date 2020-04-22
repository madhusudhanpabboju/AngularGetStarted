import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ang-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  public title:string = "Child Component";

  //@Input() public parentData;
  //     Or       use @Input to receive the data from Parent component
  @Input('parentData') public welcome;
  

  // Child to Parent using Output Decorative and EventEmitter
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit('Data coming from Child to Parent')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
