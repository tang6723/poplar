import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HumanList} from '../human-list/human-list';

declare var hprose;
/*
  Generated class for the Human page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-human',
  templateUrl: 'human.html'
})
export class HumanPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Human Page');
  }
  pushhumanlist()
  {
    this.navCtrl.push(HumanList, {});
  }
}
