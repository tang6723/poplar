import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportProfit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-profit',
  templateUrl: 'report-profit.html'
})
export class ReportProfit {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReportProfit Page');
  }

}
