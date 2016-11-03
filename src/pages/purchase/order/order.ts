import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class Order {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Order Page');
  }

}
