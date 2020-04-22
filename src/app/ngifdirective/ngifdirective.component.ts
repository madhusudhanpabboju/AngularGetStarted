import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-ngifdirective',
  templateUrl: './ngifdirective.component.html',
  styleUrls: ['./ngifdirective.component.css']
})
export class NgifdirectiveComponent implements OnInit {
  public title:string = "ngIf Directive";
  public isTrueOrFalse:boolean = true;
  public displayName:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
