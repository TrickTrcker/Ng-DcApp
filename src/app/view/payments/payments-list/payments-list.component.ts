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
    this.loadPaymentData();
  }
  loadPaymentData() {
    this.PaymentData = [
      {
        patient: 'vel',
        date: '10-12-2019',
        treatment: 'Teeth Whitening',
        balance: 'Rs. 500 ',
        amount: 'Rs. 500 ',
        status: 'Paid'
      },
      {
        patient: 'vel kumar',
        date: '10-12-2019',
        treatment: 'Rx Only',
        balance: 'Rs. 100 ',
        amount: 'Rs. 1000 ',
        status: 'Unpaid'
      },
      {
        patient: 'vel murugan',
        date: '10-12-2019',
        treatment: 'XRay - Bitewing',
        balance: 'Rs. 100 ',
        amount: 'Rs. 400 ',
        status: 'Paid'
      },
      {
        patient: 'ravi',
        date: '10-12-2019',
        treatment: 'Amalgam C II',
        balance: 'Rs. 500 ',
        amount: 'Rs. 50 ',
        status: 'Paid'
      },
      {
        patient: 'sivanadan',
        date: '10-12-2019',
        treatment: 'Composite C III',
        balance: 'Rs. 50 ',
        amount: 'Rs. 50 ',
        status: 'Unpaid'
      },

      {
        patient: 'sivaganesh',
        date: '10-12-2019',
        treatment: 'Composite C III',
        balance: 'Rs. 50 ',
        amount: 'Rs. 50 ',
        status: 'Unpaid'
      },
      {
        patient: 'siva',
        date: '10-12-2019',
        treatment: 'XRay - Occlusal',
        balance: 'Rs. 50 ',
        amount: 'Rs. 50 ',
        status: 'Unpaid'
      }
    ];
  }
  show_treatmentDetails(doctor) {
    this.Payment_display = true;
  }
}
