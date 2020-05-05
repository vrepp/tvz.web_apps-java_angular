import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Course } from './course';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesUrl = 'http://localhost:8080/course';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  getCoursesByStudentJmbag(jmbag: string): Observable<Course[]> {
    const url = `${this.coursesUrl}/student/${jmbag}`;

    return this.http.get<Course[]>(url).pipe(
      tap(courses => console.log('courses by jmbag GET', courses)),
      catchError(this.handleError<Course[]>('getCoursesByStudentJmbag', []))
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
