import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contract page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract',
  templateUrl: 'contract.html'
})
export class Contract {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Contract Page');
  }

}
