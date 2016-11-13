import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExpenseCharging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-charging',
  templateUrl: 'expense-charging.html'
})
export class ExpenseCharging {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseCharging Page');
  }

}
