import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Student } from './student';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private studentsUrl = 'http://localhost:8080/student';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap(_ => console.log('students GET')),
      // catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  getStudent(jmbag: string): Observable<Student> {
    const url = `${this.studentsUrl}/${jmbag}`;

    return this.http.get<Student>(url).pipe(
      tap((newStudent: Student) => console.log('students GET by jmbag: ', newStudent)),
      catchError(this.handleError<any>('getStudent', jmbag))
    );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions).pipe(
      tap((newStudent: Student) => console.log('students ADD: ', newStudent.jmbag)),
      catchError(this.handleError<Student>('addStudent', student))
    );
  }

  updateStudent(student: Student): Observable<any> {
    const url = `${this.studentsUrl}/${student.jmbag}`;

    return this.http.put(url, student, this.httpOptions).pipe(
      tap(_ => console.log('students UPDATE: ', student.jmbag)),
      catchError(this.handleError<Student>('updateStudent', student))
    );
  }

  deleteStudent(student: Student | string): Observable<Student> {
    const jmbag = typeof student === 'string' ? student : student.jmbag;
    const url = `${this.studentsUrl}/${jmbag}`;

    return this.http.delete<Student>(url, this.httpOptions).pipe(
      tap(_ => console.log('students DELETE: ', jmbag)),
      catchError(this.handleError<any>('deleteStudent', jmbag))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
