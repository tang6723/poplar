import { Component } from '@angular/core';
import {NavController, ViewController, AlertController} from 'ionic-angular';

import {Login} from '../../login/login';
import {SettingHome} from '../../setting/setting-home/setting-home';
import {AppGlobal} from '../../../providers/app-global';
import {HomePage} from '../../home/home';

/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class Popover {
  settingHome=SettingHome;
  appInstance:AppGlobal;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public alertCtrl: AlertController) {
    this.appInstance=AppGlobal.getInstance();
  }

  ionViewDidLoad() {
    console.log('Hello Popover Page');
  }

  pushSettingHome() {
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(this.settingHome);
  }

  logOut(){
    //this.appInstance.userName="";
    //this.appInstance.userPermission="";
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(Login);
  }

  confirmExitApp() {
    let alert = this.alertCtrl.create({
      title: "退出应用",
      message: "确实要退出应用?",
      buttons: [
        {
          text: "取消"
        },
        {
          text: "确定",
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    alert.present();
  }

}
