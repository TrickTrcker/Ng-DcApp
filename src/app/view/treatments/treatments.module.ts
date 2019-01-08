import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentsListComponent } from './treatments-list/treatments-list.component';

@NgModule({
  declarations: [TreatmentsListComponent],
  imports: [
    CommonModule,
    TreatmentsRoutingModule
  ]
})
export class TreatmentsModule { }
