
export interface IEZCodeAdalConfig {
  index: number;
  tenant: string;
  tenantId: string;
  clientId: string;
  redirectUri: string;
  extraQueryParameter: string;
  postLogoutRedirectUri: string;
  cacheLocation?: "localStorage" | "sessionStorage";
  endpoints: any;
}
