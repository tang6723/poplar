import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Raise Page');
  }

}
