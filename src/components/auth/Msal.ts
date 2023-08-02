import {
  Configuration,
  PublicClientApplication,
} from '@azure/msal-browser';
// import { isIEorEdge } from './VersionBrowser';

const LOGIN_MICROSOFTONLINE_URL = "https://login.microsoftonline.com/";

console.log(import.meta.env)

const config: Configuration = {
  auth: {
    // authority: `${LOGIN_MICROSOFTONLINE_URL}${import.meta.env.TENANT_ID}`,
    // clientId: import.meta.env.CLIENT_ID,
    // redirectUri: import.meta.env.REDIRECT_URL,
    authority: `${LOGIN_MICROSOFTONLINE_URL}bbb8da8f-f374-490f-9190-2242176e117c`,
    clientId: "c4fdd01a-f129-4de5-a1b3-045a6da0f7ba",
    redirectUri: "http://localhost:3001/auth",
  },
  cache: {
    cacheLocation: 'localStorage',
    // storeAuthStateInCookie: isIEorEdge() > 0,
  },
};

export const msalInstance = new PublicClientApplication(config);