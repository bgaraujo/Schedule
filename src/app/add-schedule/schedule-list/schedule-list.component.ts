
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  schedules: Observable<any[]>;

  // Obtem a lista do firebase
  constructor(public af: AngularFireDatabase) {
    this.schedules = this.af.list('schedules').valueChanges();
  }

  ngOnInit() {
  }
}
