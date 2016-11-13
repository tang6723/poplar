import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ExpenseCharging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-charging',
  templateUrl: 'expense-charging.html'
})
export class ExpenseCharging {

  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseCharging Page');
  }
  dismiss(){
    let data={'foo':'bar'};
    this.viewCtrl.dismiss(data);
  }

}
