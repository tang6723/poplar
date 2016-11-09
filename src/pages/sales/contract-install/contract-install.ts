import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractInstall Page');
  }

}
