import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
  PaymentData: any = [];
  Payment_display: boolean = false;
  isCollapsedPaymentInfo: boolean = false;
  isCollapsedPaymentHistory: boolean = true;
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
    this.PaymentData = [
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
    this.Payment_display = true;
  }
}
