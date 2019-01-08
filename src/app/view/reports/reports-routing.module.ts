import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientReportComponent } from './patient-report/patient-report.component';

const routes: Routes = [
  { path: '', component: PatientReportComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
