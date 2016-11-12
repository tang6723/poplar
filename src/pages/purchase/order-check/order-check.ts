import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the OrderCheck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-check',
  templateUrl: 'order-check.html'
})
export class OrderCheck {

  constructor(public navCtrl: NavController ,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello OrderCheck Page');
  }
  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
  }

}
