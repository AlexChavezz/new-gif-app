import { useState } from "react"

interface useValidateFormProps {
    email?: string,
    text?: string,
    password?: string,
    confirmPassword?: string,
}
interface ErrorsState {
    error: boolean,
    message: string
}
const initialState = {
    error:false,
    message:''
}
export const useValidateForm = () => {

    const regularExpresionToValidateEmailFiels = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const [error, setError] = useState<ErrorsState>( initialState )
    const resetState = () => {
        setError( initialState )
    }
    const validateLoginForm = ( email: string, password: string) => {
        if (!regularExpresionToValidateEmailFiels.test(email)) {
            setError({...error, message: "email is not a type emai expression" })
            return false;
        }
        if (password.length < 6) {
            setError({...error, message: "password length should be min 6" })
            return false;
        }
        setError( initialState )
        return true;
    }
    const validateRegisterForm = (name: string, email: string, password: string, confirmPassword: string) => {
        if (name.length < 3) {
            setError({...error, message: 'name length should be min 3' })
            return false;
        }
        if (!regularExpresionToValidateEmailFiels.test(email)) {
            setError({...error,  message: 'email should be like @something.com' })
            return false;
        }
        if( password.length < 6){
            setError({...error,  message: 'password length should be min 6' })
            return false;
        }
        if (password !== confirmPassword) {
            setError({...error,  message: 'passwords do not match' })
            return false;
        }
        setError( initialState )
        return true;
    }
    return {
        validateLoginForm,
        error,
        resetState,
        validateRegisterForm
    }
}