import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

declare var hprose;
/*
  Generated class for the OrderPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-payment',
  templateUrl: 'order-payment.html'
})
export class OrderPayment {

  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello OrderPayment Page');
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
