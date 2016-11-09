import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContractCharging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-charging',
  templateUrl: 'contract-charging.html'
})
export class ContractCharging {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractCharging Page');
  }

}
