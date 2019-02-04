import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';

@NgModule({
  declarations: [PatientsListComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    CommonModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule
  ]
})
export class PatientsModule { }
