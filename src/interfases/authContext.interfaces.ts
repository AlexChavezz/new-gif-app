
// export interface AuthState {
//     sesion: User| null
// }

export interface AuthState {
    sesion: {
        name: string,
        email: string,
        uid: string
        token: string
    } | null
}


export interface AuthContext {
    state: AuthState | null, 
    isAuthentificated: boolean,
    setIsAuthentificated:  React.Dispatch<React.SetStateAction<boolean>>,
    setState: React.Dispatch<React.SetStateAction<AuthState>>
}
