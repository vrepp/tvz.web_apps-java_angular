import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailsJmbagComponent } from './student-details-jmbag/student-details-jmbag.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentDetailsComponent,
    StudentDetailsJmbagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
