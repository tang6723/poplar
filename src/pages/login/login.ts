import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';

import {HomePage} from '../home/home';
import {AppGlobal} from '../../providers/app-global'
import {UserRole, SystemUser,UserData} from '../../providers/user-data';
import {isUndefined} from "ionic-angular/util/util";


/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserRole, SystemUser,UserData]
})
export class Login {

  appInstance: AppGlobal;
  //message: string = "Ice cream. It's Good and You Want It.";
  userInfo: SystemUser;
  userRole:UserRole
  _userName:string;
  _userPassword:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public userDataService: UserData, public loadingCtrl: LoadingController) {
    this.appInstance = AppGlobal.getInstance();
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');

  }

  loginClick() {
    let err: string = "";
    this.userDataService.login(this._userName).then(data=> {
      if (data !== isUndefined && data !== null){
        console.log(data);
        console.log('HomePage1  '+data.userPassWord);
        if(this._userPassword!==data.userPassWord){
          err = "用户名或密码错误！请输入正确信息！";
          console.log('HomePage2');
        }else {
          this.userInfo = data;
          console.log('HomePage3');
          //TODO:需要进行完善
          this.userRole.userName=this.userInfo.userName;
          console.log('HomePage3'+this.userRole.userName);
          this.userRole.userPermission =this.userInfo.userPermission;
          console.log(this.userRole.userPermission);
          this.userRole.isBill = true;
          this.userRole.isCheck = true;
          this.userRole.isCharging = true;
          this.userRole.isStock = true;
          this.userRole.isTraffic = true;
          this.userRole.isInstall = true;
          this.userRole.isRaise = true;
          this.userRole.isSetting = true;
          this.appInstance.userRole = this.userRole;
          console.log('HomePage4');

          this.navCtrl.setRoot(HomePage);
          console.log('HomePage5');
          this.navCtrl.push(HomePage);

          this.presentLoading();
        }
      }
      console.log('HomePage6');
    });

    if (err != '') {
      let alert = this.alertCtrl.create({
        title: '请输入正确信息',
        subTitle: err,
        buttons: ['OK']
      });
      alert.present();
    }

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
