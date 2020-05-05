import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {

  student: Student;
  courses: Course[];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private courseService: CourseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      const jmbag = params['jmbag'];

      this.studentService.getStudent(jmbag)
        .subscribe(student => this.student = student);

      this.courseService.getCoursesByStudentJmbag(jmbag)
        .subscribe(courses => this.courses = courses);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
