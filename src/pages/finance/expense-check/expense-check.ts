import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExpenseCheck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-check',
  templateUrl: 'expense-check.html'
})
export class ExpenseCheck {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseCheck Page');
  }

}
