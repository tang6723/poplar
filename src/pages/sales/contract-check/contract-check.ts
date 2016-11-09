import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContractCheck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-check',
  templateUrl: 'contract-check.html'
})
export class ContractCheck {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractCheck Page');
  }

}
