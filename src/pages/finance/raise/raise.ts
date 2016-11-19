import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RaiseList} from '../raise-list/raise-list';
import {RaiseItem} from '../raise-item/raise-item';
import {AppGlobal} from '../../../providers/app-global';

declare var hprose;
/*
  Generated class for the Raise page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-raise',
  templateUrl: 'raise.html'
})
export class Raise {

  raiseList=RaiseList;

  typeTmp: string;
  chargingType:string;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;

  isBill:boolean=true;
  isCheck:boolean=true;
  isCharging:boolean=true;
  isSetting:boolean=true;
  appInstance:AppGlobal;

  constructor(public navCtrl: NavController) {
    this.appInstance=AppGlobal.getInstance();
    /*
    this.isBill=this.appInstance.isBill;
    this.isCheck=this.appInstance.isCheck;
    this.isCharging=this.appInstance.isCharging;
    this.isSetting=this.appInstance.isSetting;
    */
  }

  ionViewDidLoad() {
    console.log('Hello Raise Page');
  }
  pushRaiseItem(mytype:string){
    this.navCtrl.push(RaiseItem, {
      id: this.billid,
      type: this.typeTmp

    });

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
