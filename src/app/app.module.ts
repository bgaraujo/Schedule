import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';

import { AddScheduleModule } from './add-schedule/add-schedule.module';

@NgModule({
  declarations: [
    AppComponent,
    AddScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AddScheduleModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
