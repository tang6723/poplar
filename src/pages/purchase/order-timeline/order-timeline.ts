import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {OrderCheck} from '../order-check/order-check';
import {OrderInspection} from '../order-inspection/order-inspection';
import {OrderPayment} from '../order-payment/order-payment';
import {OrderStock} from '../order-stock/order-stock';
import {OrderStorage} from '../order-storage/order-storage';
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
