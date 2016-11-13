import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

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
  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ContractCharging Page');
  }
  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
  }

}
