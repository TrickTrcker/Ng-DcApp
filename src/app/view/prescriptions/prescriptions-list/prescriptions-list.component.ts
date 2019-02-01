import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.scss']
})
export class PrescriptionsListComponent implements OnInit {

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
        name: 'Azithromycin',
        item: '500mg 3X1 capsule',
        dose: '300 mg',
        frequency: '2X1',
        from: "capsule"
      },
      {
        name: 'Amoxicillin',
        item: '500mg 3X1 capsule',
        dose: '500 mg',
        frequency: '3X1',
        from: "capsule"
      },
      {
        name: 'Flagyl',
        item: '250mg 3X1 syrup',
        dose: '250 mg',
        frequency: '3X1',
        from: "syrup"
      },
    ];
  }
  show_treatmentDetails(doctor) {
    this.treatment_display = true;
  }
}

