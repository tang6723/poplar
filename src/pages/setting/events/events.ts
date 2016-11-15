import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var hprose;
/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {

  eventtype: string ;
  gender: string ;

  eventAlertOpts;
  eventList;
  eventData;

  pets: Array<string>;

  constructor(public navCtrl: NavController) {
    //默认值一定要跟VALUE一样，不然不显示
    this.eventtype="101";
    this.gender="女";

    this.eventAlertOpts = {
      title: '选择事件?',
      subTitle: '请选择你需要的事件'
    };

    this.eventList = [
      { eventtext: '销售', eventvalue: '101' },
      { eventtext: '采购', eventvalue: '202' },
      { eventtext: '报销', eventvalue: '303' },
    ];

    this.eventData = [
      { eventtext: '审批', eventid: '101', eventvalue: "true"},
      { eventtext: '收款', eventid: '202', eventvalue: "false"},
      { eventtext: '发票', eventid: '303', eventvalue: '起用'},
      { eventtext: '出库', eventid: '404', eventvalue: '起用'},
      { eventtext: '运输', eventid: '504', eventvalue: '起用'},
      { eventtext: '安装', eventid: '604', eventvalue: '停用'},
    ];
  }

  ionViewDidLoad() {
    console.log('Hello Events Page');
  }


  eventChange(val){
    console.log('Event Change:', val);
    if(val =="101")
    {
      this.eventData = [
        { eventtext: '审批', eventid: '101', eventvalue: 'true'},
        { eventtext: '收款', eventid: '202', eventvalue: 'false'},
        { eventtext: '发票', eventid: '303', eventvalue: 'true'},
        { eventtext: '出库', eventid: '404', eventvalue: 'true'},
        { eventtext: '运输', eventid: '504', eventvalue: 'false'},
        { eventtext: '安装', eventid: '604', eventvalue: 'false'},
      ];
    }else if(val =="202"){
      this.eventData = [
        { eventtext: '审批', eventid: '101', eventvalue: '起用'},
        { eventtext: '付款', eventid: '202', eventvalue: '停用'},
        { eventtext: '发票', eventid: '303', eventvalue: '起用'},
        { eventtext: '验收', eventid: '404', eventvalue: '起用'},
        { eventtext: '入库', eventid: '504', eventvalue: '起用'},

      ];
    }else if(val =="303"){
      this.eventData = [
        { eventtext: '审批', eventid: '101', eventvalue: '起用'},
        { eventtext: '付款', eventid: '202', eventvalue: '停用'},
      ];
    }
  }

  textChange(val) {
    console.log(val);
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
