import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isCollapsedQuickStats: boolean = false;
  isCollapsedAppointments: boolean = false;
  isCollapsedFinances: boolean = false;
  isCollapsedTreatments: boolean = false;
  isCollapsedAppliedTreatments: boolean = false;
  isCollapsedPatientsGender: boolean = false;
  isCollapsedPatientsAge: boolean = false;
  isCollapsedTreatmentsbygender: boolean = false;
  isCollapsedInvolvedTeeth: boolean = false;

  barChartAppointmentsOptions: any;
  barChartAppointmentsLabels: any;
  barChartAppointmentsType: any;
  barChartAppointmentsLegend: any;
  barChartAppointmentsData: any;

  barChartFinancesOptions: any;
  barChartFinancesLabels: any;
  barChartFinancesType: any;
  barChartFinancesLegend: any;
  barChartFinancesData: any;

  barChartPatientsOptions: any;
  barChartPatientsLabels: any;
  barChartPatientsType: any;
  barChartPatientsLegend: any;
  barChartPatientsData: any;

  pieChartPatientsLabels: string[];
  pieChartPatientsData: number[];
  pieChartPatientsType: string;

  pieChartTeethLabels: string[];
  pieChartTeethData: number[];
  pieChartTeethType: string;

  pieChartAppliedTreatmentsLabels: string[];
  pieChartAppliedTreatmentsData: number[];
  pieChartAppliedTreatmentsType: string;

  barChartTreatmentsbygendersOptions: any;
  barChartTreatmentsbygendersLabels: any;
  barChartTreatmentsbygendersType: any;
  barChartTreatmentsbygendersLegend: any;
  barChartTreatmentsbygendersData: any;

  barChartTreatmentsOptions: any;
  barChartTreatmentsLabels: any;
  barChartTreatmentsType: any;
  barChartTreatmentsLegend: any;
  barChartTreatmentsData: any;

  constructor() { }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnInit() {
    this.barChartAppointments();
    this.barChartFinances();
    this.barChartPatients();
    this.pieChartPatients();
    this.pieChartTeeth();
    this.pieChartAppliedTreatments();
    this.barChartTreatmentsbygender();
    this.barChartTreatments();
  }
  // barChart
  barChartAppointments() {
    this.barChartAppointmentsOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartAppointmentsLabels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'];
    this.barChartAppointmentsType = 'bar';
    this.barChartAppointmentsLegend = true;
    this.barChartAppointmentsData = [
      { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 55, 49, 53, 42], label: 'Missed' },
      { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 49, 67, 55, 84, 81, 56, 57, 40, 65, 59, 80, 81, 56, 55, 43, 51, 40, 53, 42], label: 'Paid' },
      { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 84, 68, 56, 55, 40, 65, 59, 80, 81, 58, 55, 40, 65, 59, 80, 81, 56, 57, 40, 54, 40, 44, 86], label: 'Outstanding' }
    ];
  }

  barChartFinances() {
    this.barChartFinancesOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartFinancesLabels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'];
    this.barChartFinancesType = 'bar';
    this.barChartFinancesLegend = true;
    this.barChartFinancesData = [
      { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 55, 49, 53, 42], label: 'Payments' },
      { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 49, 67, 55, 84, 81, 56, 57, 40, 65, 59, 80, 81, 56, 55, 43, 51, 40, 53, 42], label: 'Expences' },
      { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 84, 68, 56, 55, 40, 65, 59, 80, 81, 58, 55, 40, 65, 59, 80, 81, 56, 57, 40, 54, 40, 44, 86], label: 'Profits' }
    ];
  }

  barChartPatients() {
    this.barChartPatientsOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartPatientsLabels = ['26', '45', '50'];
    this.barChartPatientsType = 'bar';
    this.barChartPatientsLegend = true;
    this.barChartPatientsData = [
      { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56, 55, 45, 55, 49, 53, 42], label: 'Age' },
    ];
  }

  pieChartPatients() {
    this.pieChartPatientsLabels = ['Male', 'Female'];
    this.pieChartPatientsData = [300, 500];
    this.pieChartPatientsType = 'pie';
  }
  pieChartTeeth() {
    this.pieChartTeethLabels = ['first molar', 'third molar', 'central incisor', 'lateral incisor', 'canine'];
    this.pieChartTeethData = [300, 500, 300, 500, 300];
    this.pieChartTeethType = 'pie';
  }
  pieChartAppliedTreatments() {
    this.pieChartAppliedTreatmentsLabels = ['Build Up', 'Crowing', 'Composite C II', 'Composite C I', 'Tooth Extraction'];
    this.pieChartAppliedTreatmentsData = [300, 500, 300, 500, 300];
    this.pieChartAppliedTreatmentsType = 'pie';
  }
  barChartTreatmentsbygender() {
    this.barChartAppointmentsOptions = {
      scaleShowVerticalLines: true,
      responsive: true
    };
    this.barChartTreatmentsbygendersLabels = ['XRay Bitewing', 'Amalgam C I', 'Tooth Extraction', 'Composite C II', 'Composite C I', 'Crowning', 'Build Up'];
    this.barChartTreatmentsbygendersType = 'bar';
    this.barChartTreatmentsbygendersLegend = true;
    this.barChartTreatmentsbygendersData = [
      { data: [67, 10, 20, 60, 43, 85, 40], label: 'Male' },
      { data: [-30, -45, -50, -55, -70, -85, -90], label: 'Female' }
    ];
  }
  barChartTreatments() {
    this.barChartTreatmentsOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartTreatmentsLabels = [];
    this.barChartTreatmentsType = 'bar';
    this.barChartTreatmentsLegend = true;
    this.barChartTreatmentsData = [
      { data: [], label: 'Profits' },
      { data: [], label: 'Applied times' }
    ];
  }
  chartClicked(event) {

  }
  chartHovered(event) {

  }
}
