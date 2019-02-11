import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';

//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
 
 

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [PaymentsListComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule

  ]
})
export class PaymentsModule { }
