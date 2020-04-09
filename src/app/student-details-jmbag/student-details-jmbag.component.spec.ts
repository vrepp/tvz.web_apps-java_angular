import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsJmbagComponent } from './student-details-jmbag.component';

describe('StudentDetailsJmbagComponent', () => {
  let component: StudentDetailsJmbagComponent;
  let fixture: ComponentFixture<StudentDetailsJmbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailsJmbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsJmbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
