import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Charging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-charging',
  templateUrl: 'charging.html'
})
export class Charging {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Charging Page');
  }

}
