import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class Popover {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Popover Page');
  }

}
