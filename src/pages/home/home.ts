import { Component } from '@angular/core';

import { PopoverController,NavController } from 'ionic-angular';
import {Popover} from '../home/popover/popover'

import {Contract} from '../sales/contract/contract';
import {ContractList} from '../sales/contract-list/contract-list';
import {Order} from '../purchase/order/order';
import {OrderList} from '../purchase/order-list/order-list';

import {StockGoods} from '../stock/stock-goods/stock-goods';
import {StockGoodsList} from  '../stock/stock-goods-list/stock-goods-list';
import {BillsList} from '../finance/bills-list/bills-list';
import {Bills} from '../finance/bills/bills';

import {ExpenseList} from '../finance/expense-list/expense-list';
import {Expense} from  '../finance/expense/expense';
import {Raise} from  '../finance/raise/raise';
import {RaiseList} from  '../finance/raise-list/raise-list';

import {AppGlobal} from '../../providers/app-global';
//import {App}
//import {isUndefined} from "ionic-angular/util/util";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myIcon: string = "md-ionic";

  contractPage=Contract;
  contractListPage=ContractList;
  orderPage=Order;
  orderListPage=OrderList;

  stockGoodsPage=StockGoods;
  stockGoodsListPage=StockGoodsList;
  billsPage=Bills;
  billsListPage=BillsList;

  expensePage=Expense;
  expenseListPage=ExpenseList;
  raisePage=Raise;
  raiseListPage=RaiseList;

  appInstance:AppGlobal;
  username:string;
  userPermission:string;

  constructor(public popoverCtrl: PopoverController,public navCtrl: NavController) {

    this.appInstance=AppGlobal.getInstance();
    //this.username=this.appInstance.userName;
    //this.userPermission=this.appInstance.userPermission;
    this.username=this.appInstance.userInf.userName;

  }

  presentPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: ev
    });
  }

  ngAfterViewInit(){
    /*
    console.time("hprose");
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    client.queryUser("3").then(function (result) {
      if (result !== isUndefined && result !== null){
        alert(result.systemUserID);
      }
      alert(result.userName);
      this.username=result.userName;

      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    });
    console.timeEnd("hprose");
    */
  }

}
