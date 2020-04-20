import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  public title:string = "Property Binding";
  public myId = "testID";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
