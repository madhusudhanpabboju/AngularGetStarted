import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  public title:string = "Routing";
  constructor() { }

  ngOnInit(): void {
  }

}
