import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'ang-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students = [];
  public techType:string;
  public errorMessage:string;
  constructor(private _studentService:StudentsService) { }

  ngOnInit(): void {
    this._studentService.getStudents()
                        .subscribe(data => this.students = data,
                                   error => this.errorMessage = error);
    this.techType = this._studentService.getTechType();
  }

}
