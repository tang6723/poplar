import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Contract} from  '../contract/contract';

declare var hprose;
/*
  Generated class for the ContractList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-list',
  templateUrl: 'contract-list.html'
})
export class ContractList {
  myIcon: string = "md-ionic";

  billTime1:string="2016年9月";
  billTime2:string="2016年8月";
  billTime3:string="2016年7月";
  billTime4:string="2016年6月";

  items: string[];

  items1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '鞍山矿业集团有限公司',billno: '#160904008', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '客户2',billno: '#160904007', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '鞍山矿业集团有限公司',billno: '#160904006', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#160904005', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '客户5',billno: '#160904004', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  items2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '客户1',billno: '#160804008', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '鞍山矿业集团有限公司',billno: '#160804007', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '客户3',billno: '#160804006', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#160804005', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '鞍山矿业集团有限公司',billno: '#160804004', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractList Page');
  }

  itemSelected(item: any)
  {
    this.navCtrl.push(Contract, {});
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
