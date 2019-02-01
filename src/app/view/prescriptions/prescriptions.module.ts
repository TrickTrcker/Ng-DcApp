import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';

//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';



// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [PrescriptionsListComponent],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule
  ]
})
export class PrescriptionsModule { }
