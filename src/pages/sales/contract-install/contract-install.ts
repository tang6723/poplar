import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ContractInstall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-install',
  templateUrl: 'contract-install.html'
})
export class ContractInstall {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ContractInstall Page');
  }
  dismiss(){
    let data={'customerIdParam':'3','customerParam':'鞍山技术学校','contactsParam':'马蓉','telephoneParam':'1233333'};
    this.viewCtrl.dismiss(data);
  }

}
