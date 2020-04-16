import { Component, OnInit, OnDestroy } from '@angular/core';
import { LecturerService } from '../lecturer.service';
import { ActivatedRoute } from '@angular/router';
import { Lecturer } from '../lecturer';

@Component({
  selector: 'app-lecturer-details',
  templateUrl: './lecturer-details.component.html',
  styleUrls: ['./lecturer-details.component.css']
})
export class LecturerDetailsComponent implements OnInit, OnDestroy {

  lecturer: Lecturer;
  private sub: any;

  constructor(
    private lecturerService: LecturerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe ( params => {
      const id = params.id;

      this.lecturerService.getLecturer(id)
        .subscribe(lecturer => this.lecturer = lecturer);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
