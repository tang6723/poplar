import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RaiseItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-raise-item',
  templateUrl: 'raise-item.html'
})
export class RaiseItem {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RaiseItem Page');
  }

}
