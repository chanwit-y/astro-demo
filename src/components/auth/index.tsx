import { MsalProvider, useMsal } from "@azure/msal-react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { msalInstance } from "./Msal";

type AuthContextType = {};
const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType
);

type Props = {
	children: ReactNode;
};
const AuthProvider = ({ children }: Props) => {
	const { instance } = useMsal();
	return (
		<MsalProvider instance={msalInstance}>
			<AuthContext.Provider value={{}}>
				<button onClick={() => {
					console.log("login");
					// instance.loginRedirect();
				}}>Login</button>
				{children}
			</AuthContext.Provider>
		</MsalProvider>
	);
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;


export const Auth = () => {
	useEffect(() => {
		console.log("auth")
console.log(msalInstance)
	}, [])
	return <MsalProvider instance={msalInstance}>
		<button onClick={() => {
			console.log("login");
			// instance.loginRedirect();
		}}>test</button>
	</MsalProvider>
}