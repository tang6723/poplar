import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OrderSupplier page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-supplier',
  templateUrl: 'order-supplier.html'
})
export class OrderSupplier {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OrderSupplier Page');
  }

}
