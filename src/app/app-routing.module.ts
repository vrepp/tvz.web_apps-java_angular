import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LecturersListComponent } from './lecturers-list/lecturers-list.component';
import { LecturerDetailsComponent } from './lecturer-details/lecturer-details.component';


const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'student/:jmbag', component: StudentDetailsComponent },
  { path: 'lecturers', component: LecturersListComponent },
  { path: 'lecturer/:id', component: LecturerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
