import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ChargingList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-charging-list',
  templateUrl: 'charging-list.html'
})
export class ChargingList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChargingList Page');
  }

}
