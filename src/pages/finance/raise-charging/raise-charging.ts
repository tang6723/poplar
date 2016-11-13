import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RaiseCharging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-raise-charging',
  templateUrl: 'raise-charging.html'
})
export class RaiseCharging {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RaiseCharging Page');
  }

}
