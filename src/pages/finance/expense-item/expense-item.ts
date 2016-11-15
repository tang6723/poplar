import { Component } from '@angular/core';
import {NavController, NavParams, ModalController } from 'ionic-angular';

import {ExpenseCharging} from '../expense-charging/expense-charging';
import {ExpenseCheck} from '../expense-check/expense-check';

declare var hprose;
/*
  Generated class for the ExpenseItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-expense-item',
  templateUrl: 'expense-item.html'
})
export class ExpenseItem {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00";
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";

  public firstParam:any;
  public secondParam:any;
  processList; any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public modalCtrl: ModalController ) {
    this.firstParam=navParams.get('id');
    this.secondParam=navParams.get('type');

    this.processList = [
      {"id": "010101", "title": "审批", "telephone": '12345678', "deptname": "联系人1", "sex": "ios-woman", "address": "客户1地址"},
      {"id": "010102", "title": "收款", "telephone": '12345678', "deptname": "联系人2", "sex": "ios-man",   "address": "客户2地址"},
      {"id": "010103", "title": "发票", "telephone": '12345678', "deptname": "联系人3", "sex": "ios-man",   "address": "客户3地址"},
      {"id": "010111", "title": "出库", "telephone": '12345678', "deptname": "联系人4", "sex": "ios-woman", "address": "客户4地址"},
      {"id": "010121", "title": "运输", "telephone": '12345678', "deptname": "联系人5", "sex": "ios-man",   "address": "客户5地址"},
      {"id": "010104", "title": "安装", "telephone": '12345678', "deptname": "联系人6", "sex": "ios-man",   "address": "客户6地址"}
    ];
  }

  ionViewDidLoad() {
    console.log('Hello ExpenseItem Page');
  }

  presentCheckModal(){
    let modal=this.modalCtrl.create(ExpenseCheck);
    modal.present();
  }

  presentChargingModal(){
    let modal=this.modalCtrl.create(ExpenseCharging);
    modal.present();
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
