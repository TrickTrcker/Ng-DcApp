import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.scss']
})
export class PrescriptionsListComponent implements OnInit {

  prescriptionsData: any = [];
  prescriptions_display: boolean = false;
  isCollapsedPrescriptionsInfo: boolean = false;
  isDelete: boolean = false;
  footStatus:boolean=false;
  constructor() { }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnInit() {
    this.loadPrescriptionsData();
  }
  loadPrescriptionsData() {
    this.prescriptionsData = [
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
  show_prescriptionsDetails(doctor) {
    this.prescriptions_display = true;
  }
}

