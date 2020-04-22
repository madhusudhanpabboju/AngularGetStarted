import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifdirectiveComponent } from './ngifdirective/ngifdirective.component';
import { NgswitchdirectiveComponent } from './ngswitchdirective/ngswitchdirective.component';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
import { ParentcomponentComponent } from './componentinteraction/parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './componentinteraction/childcomponent/childcomponent.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './services/employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './http-observables-rxjs/student-list/student-list.component';
import { StudentDetailsComponent } from './http-observables-rxjs/student-details/student-details.component';
import { StudentsService } from './http-observables-rxjs/students.service';
import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    InterpolationComponent,
    TemplatereferencevariablesComponent,
    TwowaybindingComponent,
    NgifdirectiveComponent,
    NgswitchdirectiveComponent,
    NgfordirectiveComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    RoutingComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [
    EmployeeService,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
