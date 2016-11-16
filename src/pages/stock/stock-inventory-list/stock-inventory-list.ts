import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the StockInventoryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock-inventory-list',
  templateUrl: 'stock-inventory-list.html'
})
export class StockInventoryList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StockInventoryList Page');
  }

}
