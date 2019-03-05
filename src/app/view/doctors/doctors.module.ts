import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

import { from } from 'rxjs';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [DoctorsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    DoctorsRoutingModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule
  ]
})
export class DoctorsModule { }
