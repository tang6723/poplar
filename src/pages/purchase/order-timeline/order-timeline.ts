import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {OrderCheck} from '../order-check/order-check';
import {OrderInspection} from '../order-inspection/order-inspection';
import {OrderPayment} from '../order-payment/order-payment';
import {OrderStock} from '../order-stock/order-stock';
import {OrderStorage} from '../order-storage/order-storage';

declare var hprose;
/*
  Generated class for the OrderTimeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-timeline',
  templateUrl: 'order-timeline.html'
})
export class OrderTimeline {
  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00";
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello OrderTimeline Page');
  }
  presentCheckModal(){
    let modal=this.modalCtrl.create(OrderCheck);
    modal.present();
  }

  presentInspectionModal(){
    let modal=this.modalCtrl.create(OrderInspection);
    modal.present();
  }
  presentPaymentModal(){
    let modal=this.modalCtrl.create(OrderPayment);
    modal.present();
  }
  presentStockModal(){
    let modal=this.modalCtrl.create(OrderStock);
    modal.present();
  }
  presentStorageModal(){
    let modal=this.modalCtrl.create(OrderStorage);
    modal.present();
  }

}
