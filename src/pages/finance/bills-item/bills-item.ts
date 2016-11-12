import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the BillsItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bills-item',
  templateUrl: 'bills-item.html'
})
export class BillsItem {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello BillsItem Page');
  }
  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
  }

}
