import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AngularFireDatabase
  ],
  exports: [
    ScheduleFormComponent,
    ScheduleListComponent,
  ],
  declarations: [
    ScheduleFormComponent,
    ScheduleListComponent
  ]
})
export class AddScheduleModule { }
