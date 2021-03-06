import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

declare var hprose;
/*
  Generated class for the OrderStorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-storage',
  templateUrl: 'order-storage.html'
})
export class OrderStorage {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  items: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: 'Apple MacBook Air 13.3英寸笔记本电脑 ', price: 200.00, num: 3, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flame-outline',id: '123457', name: 'Apple MacBook Air ', price: 1120.00, num: 9, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3 Apple MacBook Air ', price: 280.00, num: 6, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123459', name: 'Apple MacBook Air ', price: 2450.23, num: 15, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123460', name: 'Apple MacBook Air ', price: 900, num: 30, specification: '规格13.3英寸笔记本'}
  ];

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello OrderStorage Page');
  }
  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
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
