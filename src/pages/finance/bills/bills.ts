import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BillsList} from '../bills-list/bills-list';
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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Bills Page');
  }

}
