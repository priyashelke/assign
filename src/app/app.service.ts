
import { Injectable, Inject, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AppService {
  headers: Headers;
  options: RequestOptions;
  baseUrl: string;
  constructor( private http: Http ) {
   this.baseUrl = 'https://api.github.com/';
  }
  
  getUserList (searchName) {
    return this.http.get(this.baseUrl + 'search/users?q='+ searchName ,{}).map((res: Response) => res.json());
  }

  getUserFullInfo (userName) {
    return this.http.get(this.baseUrl + 'users/'+ userName ,{}).map((res: Response) => res.json());
  }
  getMoreInfo(userName){
    return this.http.get(this.baseUrl + 'users/'+ userName ,{}).map((res: Response) => res.json());
  }
}

