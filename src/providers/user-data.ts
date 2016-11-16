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


  constructor(public http: Http) {
    console.log('Hello UserData Provider');
  }
  load(){

  }

  public static getHelloWord():string{
    var userinf = 'jjj';
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    client.queryUser("3").then(function (result) {
      if (result !== isUndefined && result !== null){
        //alert(result.systemUserID);
      }
      //alert(result.userName);

      this.userinf=result.userName;

      console.info(userinf);
      console.log(userinf);
      console.warn(userinf);
      console.error(userinf);

    }, function (err) {
      //alert(err);
      this.userinf=err;
      console.error(err);
    });
    return userinf;
  }

  getIceCream() {
    this.hadIceCream = true;
    return 'mmmm... ice cream';
  }




}

