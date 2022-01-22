
export interface AuthState {
    sesion: User| null
}

interface User {
    sesion: {
        name: string,
        email: string,
        uid: string
        token: string
    }
}


export interface AuthContext {
    state: AuthState | null, 
    isAuthentificated: boolean,
    setIsAuthentificated:  React.Dispatch<React.SetStateAction<boolean>>,
    setState: React.Dispatch<React.SetStateAction<AuthState>>
}
