import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';

import {HomePage} from '../home/home';
import {AppGlobal} from '../../providers/app-global'
import {UserData, UserInformation} from '../../providers/user-data';
import {isUndefined} from "ionic-angular/util/util";


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

  appInstance: AppGlobal;
  //userInf:UserInformation;
  //message: string = "Ice cream. It's Good and You Want It.";
  _userName:string;
  _userPassword:string;
  /*
  enterpriseCode: string = "En001";
  enterpriseName: string = "测试企业名称";
  organizationCode: string = "Org001";
  organizationName: string = "测试机构名称";
  userCode:string;
  userType:string;
  userName:string;
  userNickName:string;
  userPermission:string;
  */

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public userDataService: UserData, public loadingCtrl: LoadingController,
              public  userInf:UserInformation) {
    this.appInstance = AppGlobal.getInstance();

  }

  ionViewDidLoad() {
    console.log('Hello Login Page');

  }

  loginClick() {
    this.presentLoading();
    let err: string = "";
    this.userDataService.login(this._userName).then(data=> {
      if (data !== isUndefined && data !== null){
        console.log(data);
        console.log(this.userDataService.test);
        console.log(this.userInf.userName);
        if(this._userPassword!==data.userPassWord){
          err = "用户名或密码错误！请输入正确信息！";
          console.log('HomePage2');
        }else {
          /*
          this.appInstance.userCode = data.userCode;
          this.appInstance.userName = data.userName;
          this.appInstance.userNickName = data.userNickName;
          this.appInstance.userPermission = data.userPermission;
          console.log('HomePage3');

          this.appInstance.isBill = true;
          this.appInstance.isCheck = true;
          this.appInstance.isCharging = true;
          this.appInstance.isStock = true;
          this.appInstance.isTraffic = true;
          this.appInstance.isInstall = true;
          this.appInstance.isRaise = true;
          this.appInstance.isSetting = true;
          */
          //TODO:需要进行完善
          this.appInstance.userInf['enterpriseCode']='Et001';
          this.appInstance.userInf.enterpriseName='ABC  Limit';
          this.appInstance.userInf.organizationCode='ORG001';
          this.appInstance.userInf.organizationName='市场部';
          this.appInstance.userInf.userType='企业员工';
          this.appInstance.userInf.userCode=data.userCode;
          this.appInstance.userInf.userName=data.userName;
          this.appInstance.userInf.userNickName=data.userNickName;
          this.appInstance.userInf.userPermission=data.userPermission;

          this.navCtrl.setRoot(HomePage);

          //this.presentLoading();
        }
      }else {
        console.log('HomePage6');
        err = "用户名或密码错误！请输入正确信息！";
      }
      if (err != '') {
        let alert = this.alertCtrl.create({
          title: '请输入正确信息',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }

    });



  }

  passwordClick() {

  }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000,
      dismissOnPageChange: true
    });
    loading.present();
  }

}
