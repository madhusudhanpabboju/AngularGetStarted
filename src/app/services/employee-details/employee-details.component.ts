import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'ang-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {  
  public title:string = "Employee Details";
  public employees = [];
  public serviceTitle;
  constructor(private _employeeDetails:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeDetails.getEmployees();
    this.serviceTitle = this._employeeDetails.getServiceTitle();
  }

} 
