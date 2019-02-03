import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tomorrowAppointments: any = [];
  todayAppointments: any = []; 
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
    this.todayAppointments = [
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'XRay - Periapical',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'      },
    ];

    this.tomorrowAppointments = [
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'Composite C II',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'XRay - Periapical',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
      {
        treament: 'XRay - Periapical',
        patient: 'Richard Fox',
        doctor: 'Elizabeth Smith'
      },
    ];
  } 
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 55, 49, 53, 42], label: 'Missed' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 49, 67, 55, 84, 81, 56, 57, 40, 65, 59, 80, 81, 56, 55, 43, 51, 40, 53, 42], label: 'Paid' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 84, 68, 56, 55, 40, 65, 59, 80, 81, 58, 55, 40, 65, 59, 80, 81, 56, 57, 40, 54, 40, 44, 86], label: 'Outstanding' }
  ];
}

