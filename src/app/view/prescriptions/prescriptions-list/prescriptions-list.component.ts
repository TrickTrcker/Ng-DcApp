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
  foodStatus:boolean=false;
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
        item: '500mg 1-1-2 capsule',
        dose: '300 mg',
        frequency: '1-0-1',
        from: "capsule"
      },
      {
        name: 'Amoxicillin',
        item: '500mg 1-0-1 capsule',
        dose: '500 mg',
        frequency: '1-0-1',
        from: "capsule"
      },
      {
        name: 'Flagyl',
        item: '250mg 1-0-2 syrup',
        dose: '250 mg',
        frequency: '1-0-2',
        from: "syrup"
      },
    ];
  }
  show_prescriptionsDetails(doctor) {
    this.prescriptions_display = true;
  }
}

