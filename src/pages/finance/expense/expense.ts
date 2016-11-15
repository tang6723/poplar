import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ExpenseList} from '../expense-list/expense-list';
import {ExpenseItem} from '../expense-item/expense-item';
import {AppGlobal} from '../../../providers/app-global';
declare var hprose;
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

  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;
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

  ngAfterViewInit(){
    console.time("hprose");
    var client = hprose.Client.create("http://www.hprose.com/example/", ["hello"]);
    client.hello("World!").then(function (result) {
      //alert(result);
      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    })
    console.timeEnd("hprose");
  }

}
