import {
  Configuration,
  PublicClientApplication,
} from '@azure/msal-browser';
// import { isIEorEdge } from './VersionBrowser';

const LOGIN_MICROSOFTONLINE_URL = "https://login.microsoftonline.com/";

console.log(import.meta.env)

const config: Configuration = {
  auth: {
    authority: `${LOGIN_MICROSOFTONLINE_URL}${import.meta.env.TENANT_ID}`,
    clientId: import.meta.env.CLIENT_ID,
    redirectUri: import.meta.env.REDIRECT_URL,
  },
  cache: {
    cacheLocation: 'localStorage',
    // storeAuthStateInCookie: isIEorEdge() > 0,
  },
};

export const msalInstance = new PublicClientApplication(config);