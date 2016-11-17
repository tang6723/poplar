import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {isUndefined} from "ionic-angular/util/util";

declare var hprose;

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  userName:string='kkkkk';
  hadIceCream: boolean = false;
  //systemUser:any=[]
  systemUser:SysteUser;

  //hprose.ClassManager.register(systemUser, 'com_ft_db_mapping_SystemUser')
  //systemUser:any;



  constructor(public http: Http) {
    console.log('Hello UserData Provider');
    //hprose.ClassManager.register(systemUser, 'com_ft_db_mapping_SystemUser');
  }
  load(){

  }

  getHelloWord():any{
    var userinf ={};
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    client.queryUser("3").then(function (result) {
      if (result !== isUndefined && result !== null){
        alert(result.systemUserID);
        userinf=result;
      }
      alert(result.userName);
      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    });
    return userinf;
  }

  getIceCream() {
    this.hadIceCream = true;
    console.log('getIceCream!!!');
    return 'mmmm... ice cream';
  }
}

export class SysteUser{
  systemUserID:number;
  rowGUID:string;
  userCode:string;
  userType:string;

}



