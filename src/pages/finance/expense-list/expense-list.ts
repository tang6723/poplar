import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Expense} from '../expense/expense';
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
  myIcon: string = "md-ionic";
  items: string[];

  billTime1:string="2016年9月";
  billTime2:string="2016年8月";
  billTime3:string="2016年7月";
  billTime4:string="2016年6月";

  items1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '王宝强',billno: '出差报销', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '微小宝',billno: '水电费', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '马蓉',billno: '出差报销', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '王宝强',billno: '加班费', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '微小宝',billno: '水电费', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  items2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '微小宝',billno: '加班费', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '王宝强',billno: '房租', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '马蓉',billno: '出差报销', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '王宝强',billno: '加班费', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '微小宝',billno: '水电费', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExpenseList Page');
  }

  itemSelected(item: any)
  {
    this.navCtrl.push(Expense, {item});
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
