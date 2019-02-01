import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentsListComponent } from './treatments-list/treatments-list.component';

//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
 
 

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [TreatmentsListComponent],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule
  ]
})
export class TreatmentsModule { }
