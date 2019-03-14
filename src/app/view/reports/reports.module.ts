import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { PatientReportComponent } from './patient-report/patient-report.component';


//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';



// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { WorkSheetComponent } from './work-sheet/work-sheet.component';


@NgModule({
  declarations: [PatientReportComponent, WorkSheetComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CommonModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule
  ]
})
export class ReportsModule { }
