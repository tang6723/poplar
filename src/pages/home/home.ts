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
  usertitle:string;

  constructor(public popoverCtrl: PopoverController,public navCtrl: NavController) {

    this.appInstance=AppGlobal.getInstance();
    this.username=this.appInstance.username;
    this.usertitle=this.appInstance.usertitle;

  }

  presentPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: ev
    });
  }

}
