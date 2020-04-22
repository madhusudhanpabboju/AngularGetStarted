import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public title:string = "Department Component";
  constructor() { }

  ngOnInit(): void {
  }

}
