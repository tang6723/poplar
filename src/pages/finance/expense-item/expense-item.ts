import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExpenseItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-item',
  templateUrl: 'expense-item.html'
})
export class ExpenseItem {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseItem Page');
  }

}
