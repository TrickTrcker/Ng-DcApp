import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: DefaultLayoutComponent,
    children: [
     // { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'doctors', loadChildren: './doctors/doctors.module#DoctorsModule' },
      { path: 'patients', loadChildren: './patients/patients.module#PatientsModule' },
      { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule' },
      { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsModule' },
      { path: 'treatments', loadChildren: './treatments/treatments.module#TreatmentsModule' },
      { path: 'prescriptions', loadChildren: './prescriptions/prescriptions.module#PrescriptionsModule' },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
      { path: 'settings', component: SettingsComponent }, 
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
