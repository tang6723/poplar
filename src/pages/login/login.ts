import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {HomePage} from '../home/home';
import {AppGlobal} from '../../providers/app-global'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  userCode: string = "1";
  userName: string = "1";
  passWord: string = "1";

  userRole:string="";
  isBill:boolean=false;
  isCheck:boolean=false;
  isCharging:boolean=false;
  isStock:boolean=false;
  isTraffic:boolean=false;
  isInstall:boolean=false;
  isRaise:boolean=false;
  isSetting:boolean=false;

  appInstance:AppGlobal;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.appInstance=AppGlobal.getInstance();
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  loginClick() {
    let err: string = "";
    if(this.passWord=="1" && this.userCode=="1"){
      this.userName="王宝强";
      this.userRole="员工";
      this.isBill=true;
      this.isCheck=false;
      this.isCharging=false;
      this.isStock=true;
      this.isTraffic=true;
      this.isInstall=true;
      this.isRaise=false;
      this.isSetting=false;


      this.appInstance.username=this.userName;
      this.appInstance.usertitle=this.userRole;
      this.appInstance.isBill=this.isBill;
      this.appInstance.isCheck=this.isCheck;
      this.appInstance.isCharging=this.isCharging;
      this.appInstance.isStock=this.isStock;
      this.appInstance.isTraffic=this.isTraffic;
      this.appInstance.isInstall=this.isInstall;
      this.appInstance.isRaise=this.isRaise;
      this.appInstance.isSetting=this.isSetting;

      this.navCtrl.setRoot(HomePage);

    }else if(this.passWord=="1" && this.userCode=="2"){
      this.userName="马容";
      this.userRole="经理";
      this.isBill=false;
      this.isCheck=true;
      this.isCharging=true;
      this.isStock=true;
      this.isTraffic=true;
      this.isInstall=true;
      this.isRaise=true;
      this.isSetting=true;

      this.appInstance.username=this.userName;
      this.appInstance.usertitle=this.userRole;
      this.appInstance.isBill=this.isBill;
      this.appInstance.isCheck=this.isCheck;
      this.appInstance.isCharging=this.isCharging;
      this.appInstance.isStock=this.isStock;
      this.appInstance.isTraffic=this.isTraffic;
      this.appInstance.isInstall=this.isInstall;
      this.appInstance.isRaise=this.isRaise;
      this.appInstance.isSetting=this.isSetting;
      this.navCtrl.setRoot(HomePage);

    }else if(this.passWord=="1" && this.userCode=="3"){
      this.userName="王五";
      this.userRole="财务";

      this.isBill=true;
      this.isCheck=true;
      this.isCharging=true;
      this.isStock=true;
      this.isTraffic=true;
      this.isInstall=true;
      this.isRaise=true;
      this.isSetting=true;


      this.appInstance.username=this.userName;
      this.appInstance.usertitle=this.userRole;
      this.appInstance.isBill=this.isBill;
      this.appInstance.isCheck=this.isCheck;
      this.appInstance.isCharging=this.isCharging;
      this.appInstance.isStock=this.isStock;
      this.appInstance.isTraffic=this.isTraffic;
      this.appInstance.isInstall=this.isInstall;
      this.appInstance.isRaise=this.isRaise;
      this.appInstance.isSetting=this.isSetting;
      this.navCtrl.setRoot(HomePage);

    }
    else {
      err = "用户名或密码错误！";
    }

    if (err != '') {
      let alert = this.alertCtrl.create({
        title: '错误：',
        subTitle: err,
        buttons: ['OK']
      });
      alert.present();
    }

  }

}
