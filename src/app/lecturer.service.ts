import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Lecturer } from './lecturer';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LecturerService {

  private lecturersUrl = 'http://localhost:8080/lecturer';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.lecturersUrl).pipe(
      tap(_ => console.log('lecturers GET')),
      catchError(this.handleError<Lecturer[]>('getLecturers', []))
    );
  }

  getLecturer(id: string): Observable<Lecturer> {
    const url = `${this.lecturersUrl}/${id}`;

    return this.http.get<Lecturer>(url).pipe(
      tap((newLecturer: Lecturer) => console.log('lecturers GET by id: ', newLecturer)),
      catchError(this.handleError<any>('getLecturer', id))
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
