import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Electron } from '../../providers/electron';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public electron: Electron) {
  }
  zoomIn(){
    this.electron.zoomIn();
  }
  zoomOut(){
    this.electron.zoomOut();
  }
}
