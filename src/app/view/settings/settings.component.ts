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
  constructor() { }

  ngOnInit() {
    this.createAccountEmail = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
    this.forgotAccountEmail = "<div>Hello welcome to <b>Thenu Dental Hospital</b> </div><div>Powered by <b>TrickTrcker</b></div><div><br></div>";
  }

}
