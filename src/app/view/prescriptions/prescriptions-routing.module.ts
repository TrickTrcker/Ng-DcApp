import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';

const routes: Routes = [
  { path: '', component: PrescriptionsListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionsRoutingModule { }
