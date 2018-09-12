import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  title = 'Agendar Horario';

  // Isso estaria em uma lista dinamica no firebase, como se trata de um testa, fiz aqui para ficar mais agil pois este não é o foco
  specialties = ['Acupuntura', 'Alergia e Imunologia', 'Cardiologia', 'Dermatologia', 'Endoscopia', 'Infectologia'];

  constructor( private angularFire: AngularFireDatabase) { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {

    let timestamp = f.controls.date.value;
    if ( f.controls.date.value !== '' ) {
      timestamp = new Date(f.controls.date.value).getTime();
    }
    // Cadastro no firebase
    this.angularFire.list('schedules').push(
      {
        date: timestamp,
        specialty: f.controls.specialty.value,
        enabled: false
      }
    ).then((t: any) => console.log('dados gravados: ' + t.key));

    // Limpa os campos
    f.controls.date.setValue('');
    f.controls.specialty.setValue('');

  }

}
