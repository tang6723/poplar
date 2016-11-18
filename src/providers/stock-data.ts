import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var hprose;

/*
  Generated class for the StockData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StockDataProperty{
  StockDataID	:number;
  RowGUID	:string;
  EnterpriseCode	:string;
  EnterpriseName	:string;
  OrganizationCode	:string;
  OrganizationName	:string;
  StockID	:string;
  MaterialID	:string;
  CostOrganizationCode	:string;
  AccountYear	:string;
  BatchNo	:string;
  OpeningStock	:number;
  WarehouseQty	:number;
  OutputQty	:number;
  EndingQty	:number;
  OpeningAmount	:number;
  State	:string;
  Remarks	:string;

};



@Injectable()
export class StockData {

  constructor(public http: Http) {
    console.log('Hello StockData Provider');
  }

  getStockDataList(){
    console.log("getStockDataList Start!!");
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["getStockDataList"]);
    var result;
    client.getStockDataList().then(function (d) {
      console.error(d);
      result = d;
      console.log("getStockDataList End!!");
      // return d;
    });
    console.error(result);
    return result;
  }

}
