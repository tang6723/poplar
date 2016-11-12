import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RaiseList} from '../raise-list/raise-list';
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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Raise Page');
  }

}
