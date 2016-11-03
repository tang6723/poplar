import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContractTimeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-timeline',
  templateUrl: 'contract-timeline.html'
})
export class ContractTimeline {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContractTimeline Page');
  }

}
