import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public title:string = "Employee Component";
  constructor() { }

  ngOnInit(): void {
  }

}
