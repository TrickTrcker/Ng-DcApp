import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

@NgModule({
  declarations: [DoctorsListComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
