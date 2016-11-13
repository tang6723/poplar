import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CustomerList} from '../customer-list/customer-list';

/*
  Generated class for the Customer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class Customer {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Customer Page');
  }

  popCustomerList()
  {
    this.navCtrl.push(CustomerList, {});
  }
}
