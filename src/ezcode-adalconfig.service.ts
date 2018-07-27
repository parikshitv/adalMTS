import { Injectable } from '@angular/core';
import { IEZCodeAdalConfigs } from './IEZCodeAdalConfigs';
import { IEZCodeAdalConfig } from './IEZCodeAdalConfig';
import { inject } from '@angular/core/testing';

export class EZCodeAdalConfigs implements IEZCodeAdalConfigs {
  adalconfigs: IEZCodeAdalConfig[] = [];
  customRedirectAfterLogin: string = "";
  customindex: number = 0;
  constructor() {} 
}
