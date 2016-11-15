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

  ngAfterViewInit(){
    console.time("hprose");
    var client = hprose.Client.create("http://www.hprose.com/example/", ["hello"]);
    client.hello("World!").then(function (result) {
      //alert(result);
      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    })
    console.timeEnd("hprose");
  }

}
