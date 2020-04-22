import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public title:string = "Pipes / Filters";
  public name:string= "Madhusudhan pabboju";
  public person={
    "firstName" :"Madhusudhan",
    "lastName":"Pabboju"
  };
  public date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
