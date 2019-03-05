import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  doctorData: any = [];
  selecedItems: string = "";
  doctordetails_display: boolean = false;
  isCollapsedDoctorInfo: boolean = false;
  isCollapsedAppointments: boolean = true;
  isDelete: boolean = false;
  isDeleteAppointment: boolean = false;
  constructor() {

  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnInit() {
    this.loadDoctorData();
  }


  loadDoctorData() {
    this.doctorData = [
      {
        name: 'Vivek',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'Smith',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'christopher',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'saravanan',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'saravanakumar',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'ravi',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      }, {
        name: 'ramu',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'kumar',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'devid',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'sibi',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
    ];
  }
  show_doctorDetails(doctor?) {
    this.doctordetails_display = true;
  }
}
