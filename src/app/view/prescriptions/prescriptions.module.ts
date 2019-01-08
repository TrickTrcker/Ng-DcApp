import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';

@NgModule({
  declarations: [PrescriptionsListComponent],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule
  ]
})
export class PrescriptionsModule { }
