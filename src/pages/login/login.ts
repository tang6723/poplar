import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';

import {HomePage} from '../home/home';
import {AppGlobal} from '../../providers/app-global'
import {UserData, UserRole} from '../../providers/user-data';
import {isUndefined} from "ionic-angular/util/util";


/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
  //providers: [UserData]
})
export class Login {

  appInstance: AppGlobal;
  userRR:UserRole;
  //message: string = "Ice cream. It's Good and You Want It.";
  _userName:string;
  _userPassword:string;
  //
  enterpriseCode: string = "En001";
  enterpriseName: string = "测试企业名称";
  organizationCode: string = "Org001";
  organizationName: string = "测试机构名称";
  userCode:string;
  userType:string;
  userName:string;
  userNickName:string;
  userPermission:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public userDataService: UserData, public loadingCtrl: LoadingController) {
    this.appInstance = AppGlobal.getInstance();
    userDataService.test='kkkk';
    this.userRR.userName="kkkkkkkllll";
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');

  }

  loginClick() {
    let err: string = "";
    this.userDataService.login(this._userName).then(data=> {
      if (data !== isUndefined && data !== null){
        console.log(data);
        console.log(this.userDataService.test);
        console.log(this.userRR.userName);
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
          //TODO:需要进行完善
          this.appInstance.isBill = true;
          this.appInstance.isCheck = true;
          this.appInstance.isCharging = true;
          this.appInstance.isStock = true;
          this.appInstance.isTraffic = true;
          this.appInstance.isInstall = true;
          this.appInstance.isRaise = true;
          this.appInstance.isSetting = true;
          */
          this.appInstance.userRole['enterpriseCode']='Et001';
          this.appInstance.userRole.enterpriseName='ABC  Limit';
          this.appInstance.userRole.organizationCode='ORG001';
          this.appInstance.userRole.organizationName='市场部';
          this.appInstance.userRole.userType='';
          this.appInstance.userRole.userCode=data.userCode;
          this.appInstance.userRole.userName=data.userName;
          this.appInstance.userRole.userNickName=data.userNickName;
          this.appInstance.userRole.userPermission=data.userPermission;


          console.log('HomePage4');

          this.navCtrl.setRoot(HomePage);
          console.log('HomePage5');
          //this.navCtrl.push(HomePage);

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
    //this.userCode=this.userInfo['userName'];
    /*
    this.userDataService.getHelloWord().then(data=> {
      this.userInfo = data;
      this.userCode = data.userName;
      alert(this.userCode);

    });
    */
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
