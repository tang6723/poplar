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

  public myDate:string;
  report: string = "profitType";

  constructor(public navCtrl: NavController) {
    this.myDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('Hello ReportProfit Page');
  }

}
