import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatments-list',
  templateUrl: './treatments-list.component.html',
  styleUrls: ['./treatments-list.component.scss']
})
export class TreatmentsListComponent implements OnInit {
  treatmentData: any = [];
  treatment_display: boolean = false;
  isCollapsedTreatmentInfo: boolean = false;
  isCollapsedAppointments: boolean = true;
  isDelete: boolean = false;
  isDeleteAppointment: boolean = false;
  constructor() { }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnInit() {
    this.loadTreatmentData();
  }
  loadTreatmentData() {
    this.treatmentData = [
      {
        treatment: 'Teeth Whitening',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'Rx Only',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'XRay - Bitewing',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'Amalgam C II',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'Composite C III',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        ntreatmentame: 'XRay - Occlusal',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      }, {
        treatment: 'Composite C IV',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'XRay - Periapical',
        unit: 'unit: $5 per unit',
        expenses: '$5',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'Crowning',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
      {
        treatment: 'Scaling and Polishing',
        unit: 'unit: $5 per unit',
        expenses: '$5 ',
        doneAppointments: '10 done',
        upcomingAppointments: "10 upcoming"
      },
    ];
  }
  show_treatmentDetails(doctor) {
    this.treatment_display = true;
  }
}
