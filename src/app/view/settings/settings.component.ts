import { Component, OnInit } from '@angular/core';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  createAccountEmail: any;
  forgotAccountEmail: any;
  emailMessage: any;
  smsMessage: any;
  whatsappMessage: any;
  allowPatient: boolean = false;

  constructor() { }

  ngOnInit() {
    this.configMessage();
  }
  //// set configuration for email, sms, whatsapp message.
  configMessage() {
    this.createAccountEmail = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
    this.forgotAccountEmail = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
    this.emailMessage = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
    this.smsMessage = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
    this.whatsappMessage = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
  }
  //// get template message form database
  getTemplateMessage() {

  }
  //// save, edit, delete template message from database
  crudTemplateMeaageSettings() {

  }

}
