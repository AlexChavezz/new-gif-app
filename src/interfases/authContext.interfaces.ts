
export type authAction = { type: 'login', payload: authState }
export interface authState {
    user: {
        userName: string,
        email: string,
        uid: string
    },
    token: string
}
interface UserAuth {
    user: {
        userName: string
        email: string,
        uid: string,
    },
    token: string
}
export interface AuthContext {
    state: UserAuth
    dispatch: (value: authAction) => void
}
