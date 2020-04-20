import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  public title:string = "Two Way Binding";
  public name ="";
  constructor() { }

  ngOnInit(): void {
  }

}
