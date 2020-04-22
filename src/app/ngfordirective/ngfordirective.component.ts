import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-ngfordirective',
  templateUrl: './ngfordirective.component.html',
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent implements OnInit {
public title:string = "ngFor Directive";
public colors:Array<string> = ["red", "blue", "green", "Orange"];
public objArray:Array<object>=[
  {id: 1, text: 'Sentence 1'},
  {id: 2, text: 'Sentence 2'},
  {id: 3, text: 'Sentence 3'},
  {id: 4, text: 'Sentence 4'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
