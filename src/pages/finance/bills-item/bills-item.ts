import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BillsItem Page');
  }

}
