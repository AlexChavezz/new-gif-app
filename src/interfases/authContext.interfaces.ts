
export interface AuthState {
    sesion: {
        name: string,
        email: string,
        uid: string
        token: string
    } | null
}


export interface AuthContext {
    auth: AuthState | null, 
    isAuthentificated: boolean,
    setIsAuthentificated:  React.Dispatch<React.SetStateAction<boolean>>,
    setAuth: React.Dispatch<React.SetStateAction<AuthState>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, 
}
