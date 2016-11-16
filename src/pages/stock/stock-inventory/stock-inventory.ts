import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the StockInventory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock-inventory',
  templateUrl: 'stock-inventory.html'
})
export class StockInventory {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StockInventory Page');
  }

}
