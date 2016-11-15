import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var hprose;
/*
  Generated class for the ReportBalance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-balance',
  templateUrl: 'report-balance.html'
})
export class ReportBalance {

  public myDate:string;
  report: string = "profitType";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReportBalance Page');
  }

}
