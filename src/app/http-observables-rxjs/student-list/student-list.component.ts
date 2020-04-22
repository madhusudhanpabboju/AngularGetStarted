import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'ang-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students = [];
  public techType:string;
  public errorMessage:string;

  constructor(private _studentsService:StudentsService) {

   }

  ngOnInit(): void {
    this._studentsService.getStudents()
                          .subscribe(data => this.students = data,
                                      error => this.errorMessage = error);
    this.techType = this._studentsService.getTechType();
  }

}
