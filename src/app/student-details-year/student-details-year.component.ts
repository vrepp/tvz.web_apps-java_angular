import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-details-year',
  templateUrl: './student-details-year.component.html',
  styleUrls: ['./student-details-year.component.css']
})
export class StudentDetailsYearComponent implements OnInit {

  @Input() numECTS: number;

  constructor() { }

  ngOnInit(): void {
  }

  getYear(): number {
    return Math.ceil(this.numECTS / 60);
  }

}
