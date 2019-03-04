import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { ViewRoutingModule } from './view-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';

// Import 3rd party components
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';

//primeng components



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const APP_CONTAINERS = [DefaultLayoutComponent];

//primeng components
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { EditorModule } from 'primeng/editor';



// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomeComponent,
    StatisticsComponent,
    SettingsComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ViewRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule,
    EditorModule
  ]
})
export class ViewModule { }
