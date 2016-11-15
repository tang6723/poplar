import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {BillsList} from '../bills-list/bills-list';
import {BillsItem} from '../bills-item/bills-item';

declare var hprose;
/*
  Generated class for the Bills page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class Bills {

  billsList=BillsList;
  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  constructor(public navCtrl: NavController ,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Bills Page');
  }

  presentBillsModal(){
    let modal=this.modalCtrl.create(BillsItem);
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
