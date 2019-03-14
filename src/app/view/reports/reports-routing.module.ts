import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { WorkSheetComponent } from './work-sheet/work-sheet.component';

const routes: Routes = [
  { path: '', component: PatientReportComponent },
  { path: 'worksheet', component: WorkSheetComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
