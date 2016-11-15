import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var hprose;
/*
  Generated class for the ReportAsset page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-asset',
  templateUrl: 'report-asset.html'
})
export class ReportAsset {

  asset:string;

  constructor(public navCtrl: NavController) {
    this.asset="5000.00";
  }

  ionViewDidLoad() {
    console.log('Hello ReportAsset Page');
  }

}
