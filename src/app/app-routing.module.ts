import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './routing/department/department.component';
import { EmployeesComponent } from './routing/employees/employees.component';


const routes: Routes = [
    {path: "department", component:DepartmentComponent},
    {path: "employees", component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentComponent, EmployeesComponent];