import { authAction, authState } from "../interfases/authContext.interfaces";


export const authReducer = (state: authState, action: authAction): authState => {
    switch (action.type) {
        case 'login':
            return {
                user: {
                    userName: action.payload.user.userName,
                    email: action.payload.user.email,
                    uid: action.payload.user.uid
                },
                token: action.payload.token
            }
        default:
            return state;
    }
}