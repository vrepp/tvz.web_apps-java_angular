import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './students-mock'
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }
}
