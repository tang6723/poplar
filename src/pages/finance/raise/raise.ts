import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RaiseList} from '../raise-list/raise-list';
import {RaiseItem} from '../raise-item/raise-item';
import {AppGlobal} from '../../../providers/app-global';
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
  billid:string="#201609040008";
  typeTmp: string;

  isBill:boolean=false;
  isCheck:boolean=false;
  isCharging:boolean=false;
  isSetting:boolean=false;
  appInstance:AppGlobal;

  constructor(public navCtrl: NavController) {
    this.appInstance=AppGlobal.getInstance();
    this.isBill=this.appInstance.isBill;
    this.isCheck=this.appInstance.isCheck;
    this.isCharging=this.appInstance.isCharging;
    this.isSetting=this.appInstance.isSetting;
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

}
