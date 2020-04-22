import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudents } from './students';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private _url:string = "../../assets/data/students.json";

  constructor(private http: HttpClient) { 

  }
  getTechType(){
    return "HTTP-Observables-Rxjs";
  }
  getStudents():Observable<IStudents[]>{
    return this.http.get<IStudents[]>(this._url)
                      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  
}
