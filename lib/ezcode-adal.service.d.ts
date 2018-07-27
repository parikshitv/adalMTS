import { Observable } from 'rxjs/Observable';
import { EZCodeAdalConfigs } from './ezcode-adalconfig.service';
import { IEZLoginUser } from './IEZLoginUser';
export declare class EZCodeAdalService {
    private ezserve;
    private context;
    private config;
    private http;
    constructor(ezserve: EZCodeAdalConfigs);
    setAdalContext(): void;
    login(): void;
    logout(): void;
    handleCallback(): void;
    readonly userInfo: IEZLoginUser;
    readonly accessToken: string;
    getAccessTokenByUrl(url: string): Observable<string>;
    readonly isAuthenticated: boolean;
}
