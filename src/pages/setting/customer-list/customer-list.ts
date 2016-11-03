import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CustomerList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html'
})
export class CustomerList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CustomerList Page');
  }

}
