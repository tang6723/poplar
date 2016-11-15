import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

declare var hprose;
/*
  Generated class for the BillsItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bills-item',
  templateUrl: 'bills-item.html'
})
export class BillsItem {
  items: string[];

  contractitems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '鞍山矿业集团有限公司',billno: '销售', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '鞍山公交公司',billno: '筹资', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '鞍山一中',billno: '销售', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '鞍山矿业集团有限公司',billno: '筹资', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '鞍山一中',billno: '销售', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  contractitems2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '鞍山一中',billno: '采购', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '鞍山矿业集团有限公司',billno: '报销', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '鞍山公交公司',billno: '费用', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '鞍山矿业集团有限公司',billno: '采购', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '鞍山一中',billno: '采购', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello BillsItem Page');
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
