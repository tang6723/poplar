import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import {isUndefined} from "ionic-angular/util/util";

declare var hprose;

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  client:any;

  constructor(public http: Http) {
    console.log('Hello UserData Provider');
    this.client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
  }


  login(username:string):any{
    //var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    var result = this.client.queryUser(username);
    return result;
  }



}





