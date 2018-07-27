///// <reference path="../../../../node_modules/@types/adal/index.d.ts" />

import { Injectable } from '@angular/core';
//import 'expose-loader?AuthenticationContext!../node_modules/adal-angular/lib/adal.js';
import * as AuthenticationContext from "adal-angular";
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { EZCodeAdalConfigs } from './ezcode-adalconfig.service';
import { IEZCodeAdalConfig } from './IEZCodeAdalConfig';
import { IEZLoginUser } from './IEZLoginUser';
// import { Http } from '@angular/http';

//let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable()
export class EZCodeAdalService {

  //private context: adal.AuthenticationContext;
  private context: AuthenticationContext;
  private config: IEZCodeAdalConfig;
  private http: any;

  constructor(private ezserve: EZCodeAdalConfigs) {
    
	this.context = new AuthenticationContext(this.ezserve.adalconfigs[this.ezserve.customindex]);
    //this.context = new createAuthContextFn(this.ezserve.adalconfigs[this.ezserve.customindex]);
    this.config = this.ezserve.adalconfigs[this.ezserve.customindex];
  }

  public setAdalContext() {

    this.config = this.ezserve.adalconfigs[this.ezserve.customindex];
    this.context.config = this.config;
  }

  login() {    
    this.context.login();    
  }

  logout() {
    this.context.logOut();
  }

  handleCallback() {
    this.context.handleWindowCallback();
  }

  public get userInfo(): IEZLoginUser {
    const adalUser = this.context.getCachedUser();
    return adalUser == null ? null :
      {
        upn: adalUser.userName,
        firstName: adalUser.profile["given_name"],
        lastName: adalUser.profile["family_name"],
        displayName: adalUser.profile["name"],
        profile: adalUser.profile
      };
  }

  public get accessToken() {
    return this.context.getCachedToken(this.config.clientId);
  }
  public getAccessTokenByUrl(url: string): Observable<string> {
    return Observable.create(emitter => {
      const resourceId = this.context.getResourceForEndpoint(url);
      if (resourceId != null) {
        this.context.acquireToken(resourceId,
          (message, token) => {
            emitter.next(token);
            emitter.complete();
          });
      } else {
        emitter.next(null);
        emitter.complete();
      }
    });
  }
  public get isAuthenticated() {
    return ((this.userInfo !== null) && (this.accessToken !== null));
  }
}
