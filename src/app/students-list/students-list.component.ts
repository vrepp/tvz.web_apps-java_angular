import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  selectedStudent: Student;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  add(firstName: string, lastName: string, jmbag: string, numECTS: number): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    jmbag = jmbag.trim();

    if ( !firstName || !lastName || !jmbag || !numECTS) {
      return;
    }

    const dateOfBirth = '10.10.2002.';
    const payingTuition = false;
    const student: Student = {
      firstName,
      lastName,
      jmbag,
      numECTS,
      dateOfBirth,
      payingTuition
    };

    this.studentService.addStudent(student)
      .subscribe( newStudent => this.students.push(newStudent) );
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.router.navigate(['/student', student.jmbag]);
  }

  onDelete(student: Student): void {
    this.studentService.deleteStudent(student)
      .subscribe( _ => this.students = this.students.filter( obj => obj !== student) );
  }
}
