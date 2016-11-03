import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Goods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class Goods {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Goods Page');
  }

}
