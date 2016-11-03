import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the StockGoodsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock-goods-list',
  templateUrl: 'stock-goods-list.html'
})
export class StockGoodsList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StockGoodsList Page');
  }

}
