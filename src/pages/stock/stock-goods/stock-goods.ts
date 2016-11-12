import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {StockGoodsList} from '../stock-goods-list/stock-goods-list';
/*
  Generated class for the StockGoods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock-goods',
  templateUrl: 'stock-goods.html'
})
export class StockGoods {
  stockGoodsList=StockGoodsList;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StockGoods Page');
  }

}
