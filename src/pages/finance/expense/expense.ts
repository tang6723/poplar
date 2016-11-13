import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ExpenseList} from '../expense-list/expense-list';
import {ExpenseItem} from '../expense-item/expense-item';
import {AppGlobal} from '../../../providers/app-global';
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

  billid:string="#201609040008";
  typeTmp: string;

  isBill:boolean=false;
  isCheck:boolean=false;
  isCharging:boolean=false;
  isSetting:boolean=false;
  appInstance:AppGlobal;

  expenseList=ExpenseList;

  constructor(public navCtrl: NavController) {
    this.appInstance=AppGlobal.getInstance();
    this.isBill=this.appInstance.isBill;
    this.isCheck=this.appInstance.isCheck;
    this.isCharging=this.appInstance.isCharging;
    this.isSetting=this.appInstance.isSetting;
  }

  ionViewDidLoad() {
    console.log('Hello Expense Page');
  }

  pushExpenseItem(mytype:string){
    this.navCtrl.push(ExpenseItem, {
      id: this.billid,
      type: this.typeTmp

    });

  }

}
