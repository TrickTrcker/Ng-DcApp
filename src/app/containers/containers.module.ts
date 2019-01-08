import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [LoginComponent, ForgotpasswordComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    ContainersRoutingModule
  ]
})
export class ContainersModule { }
