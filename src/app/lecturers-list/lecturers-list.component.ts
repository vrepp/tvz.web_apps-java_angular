import { Component, OnInit } from '@angular/core';
import { Lecturer } from '../lecturer';
import { LecturerService } from '../lecturer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers-list',
  templateUrl: './lecturers-list.component.html',
  styleUrls: ['./lecturers-list.component.css']
})
export class LecturersListComponent implements OnInit {

  lecturers: Lecturer[];

  constructor(
    private lecturerService: LecturerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLecturers();
  }

  getLecturers(): void {
    this.lecturerService.getLecturers()
      .subscribe(lecturers => this.lecturers = lecturers);
  }

  onSelect(lecturer: Lecturer): void {
    this.router.navigate(['/lecturer', lecturer.id]);
  }
}
