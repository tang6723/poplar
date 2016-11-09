import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContractStock page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-stock',
  templateUrl: 'contract-stock.html'
})
export class ContractStock {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractStock Page');
  }

}
