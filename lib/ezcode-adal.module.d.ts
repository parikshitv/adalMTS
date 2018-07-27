import { ModuleWithProviders } from '@angular/core';
import { EZCodeAdalConfigs } from './ezcode-adalconfig.service';
export declare class EZCodeAdalModule {
    constructor(parentModule: EZCodeAdalModule);
    static forRoot(config: EZCodeAdalConfigs): ModuleWithProviders;
}
