import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ContractCustomer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-customer',
  templateUrl: 'contract-customer.html'
})
export class ContractCustomer {

  constructor(public navCtrl: NavController ,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ContractCustomer Page');
  }

  dismiss(){
    let data={'foo':'bar'};
    this.viewCtrl.dismiss(data);
  }

}
