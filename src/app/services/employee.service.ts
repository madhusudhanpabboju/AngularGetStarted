import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getServiceTitle(){
    return "Services";
  }
  getEmployees(){
    return [
      {"id":1, "name":"Madhusudhan", "age":35},
      {"id":2, "name":"Angadh", "age":7},
      {"id":3, "name":"Akshara", "age":4},
      {"id":4, "name":"Rachana", "age":33}
    ];
  }
/*
    1. Define the employee services class
    2. Declare empty array in Employee list and details components
    3. Register with Injector in app module providers and import the employee service
    4. Declare as dependency in Employee list and details components
*/
}

