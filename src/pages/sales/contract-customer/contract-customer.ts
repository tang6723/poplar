import { Component } from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';

/*
  Generated class for the ContractCustomer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-customer',
  templateUrl: 'contract-customer.html'
})
export class ContractCustomer {

  items: string[];
  customerIdParam: string;
  customerParam:string ="鞍山技术学校";
  contactsParam:string="马蓉";
  telephoneParam:string ="1233333";
  customeraddressParam:string ="辽宁省鞍山市立山区湖南街34号";

  customerList: any;


  constructor(public navCtrl: NavController ,public viewCtrl: ViewController,params: NavParams) {
    this.customerIdParam = params.get('customerIdParam');

    this.customerList = [
      {"id": "010101", "customer": "客户1", "telephone": '12345678', "contacts": "联系人1", "sex": "ios-woman", "customeraddress": "客户1地址"},
      {"id": "010102", "customer": "客户2", "telephone": '7654321', "contacts": "联系人2", "sex": "ios-man", "customeraddress": "客户2地址"},
      {"id": "010103", "customer": "客户3", "telephone": '12345678', "contacts": "联系人3", "sex": "ios-man", "customeraddress": "客户3地址"},
      {"id": "010111", "customer": "客户4", "telephone": '7895456564564', "contacts": "联系人4", "sex": "ios-woman", "customeraddress": "客户4地址"},
      {"id": "010121", "customer": "客户5", "telephone": '12345678', "contacts": "联系人5", "sex": "ios-man", "customeraddress": "客户5地址"},
      {"id": "010104", "customer": "客户6", "telephone": '12345678', "contacts": "联系人6", "sex": "ios-man", "customeraddress": "客户6地址"}
    ];

  }

  ionViewDidLoad() {
    console.log('Hello ContractCustomer Page');
  }

  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
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
