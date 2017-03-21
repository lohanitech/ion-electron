import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as electron from 'electron';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clipboardContent: string;
  constructor(public navCtrl: NavController) {
    this.clipboardContent = electron.clipboard.readText();
  }

}
