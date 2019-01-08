import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { PatientReportComponent } from './patient-report/patient-report.component';

@NgModule({
  declarations: [PatientReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
