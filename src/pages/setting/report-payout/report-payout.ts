import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportPayout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-payout',
  templateUrl: 'report-payout.html'
})
export class ReportPayout {

  public myDate:string;
  report: string = "reportType";

  constructor(public navCtrl: NavController) {
    this.myDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('Hello ReportPayout Page');
  }

}
