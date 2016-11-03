import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Expense page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html'
})
export class Expense {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Expense Page');
  }

}
