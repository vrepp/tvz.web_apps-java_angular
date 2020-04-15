import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {

  student: Student;
  private sub: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      const jmbag = params['jmbag'];

      this.studentService.getStudent(jmbag)
        .subscribe(student => this.student = student);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
