import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExpenseList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-list',
  templateUrl: 'expense-list.html'
})
export class ExpenseList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseList Page');
  }

}
