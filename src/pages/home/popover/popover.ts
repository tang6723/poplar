import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController,public navCtrl: NavController) {
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
    this.appInstance.username="";
    this.appInstance.usertitle="";
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(Login);
  }

}
