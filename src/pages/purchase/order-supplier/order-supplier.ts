import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

declare var hprose;
/*
  Generated class for the OrderSupplier page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-supplier',
  templateUrl: 'order-supplier.html'
})
export class OrderSupplier {
  customerList: any;
  items: string[];

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
    this.customerList = [
      {"id": "010101", "customer": "鞍山矿业有限公司", "telephone": '12345678', "contacts": "联系人1", "sex": "ios-woman", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"},
      {"id": "010102", "customer": "辽宁中国北方集团有限公司", "telephone": '7654321', "contacts": "联系人2", "sex": "ios-man", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"},
      {"id": "010103", "customer": "鞍山百姓生活中心", "telephone": '12345678', "contacts": "联系人3", "sex": "ios-man", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"},
      {"id": "010111", "customer": "鞍山生活馆", "telephone": '7895456564564', "contacts": "联系人4", "sex": "ios-woman", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"},
      {"id": "010121", "customer": "鞍山铁东区政府", "telephone": '12345678', "contacts": "联系人5", "sex": "ios-man", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"},
      {"id": "010104", "customer": "鞍山立山区政府", "telephone": '12345678', "contacts": "联系人6", "sex": "ios-man", "customeraddress": "辽宁省鞍山市铁东区湖南街34号"}
    ];
  }

  ionViewDidLoad() {
    console.log('Hello OrderSupplier Page');
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
