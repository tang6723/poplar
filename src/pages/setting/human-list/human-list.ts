import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HumanList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-human-list',
  templateUrl: 'human-list.html'
})
export class HumanList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HumanList Page');
  }

}
