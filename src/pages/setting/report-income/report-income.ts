import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportIncome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-income',
  templateUrl: 'report-income.html'
})
export class ReportIncome {

  public myDate:string;
  report: string = "profitType";

  constructor(public navCtrl: NavController) {
    this.myDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('Hello ReportIncome Page');
  }

}
