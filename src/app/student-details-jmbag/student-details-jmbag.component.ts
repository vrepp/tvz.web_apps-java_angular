import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-details-jmbag',
  templateUrl: './student-details-jmbag.component.html',
  styleUrls: ['./student-details-jmbag.component.css']
})
export class StudentDetailsJmbagComponent implements OnInit {

  @Input() jmbag: string;

  constructor() { }

  ngOnInit(): void {
  }

  isStartedOnTVZ(): boolean {
    return this.jmbag.substr(0, 4) === '0246';
  }
}
