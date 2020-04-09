import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsYearComponent } from './student-details-year.component';

describe('StudentDetailsYearComponent', () => {
  let component: StudentDetailsYearComponent;
  let fixture: ComponentFixture<StudentDetailsYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailsYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
