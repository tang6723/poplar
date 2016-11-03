import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GoodsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html'
})
export class GoodsList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GoodsList Page');
  }

}
