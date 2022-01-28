import { useState } from "react"

interface useValidateFormProps {
    email?: string,
    text?: string,
    password?: string,
    confirmPassword?: string,
}
type ErrorsState = {
    error: string
}
export const useValidateForm = () => {

    const regularExpresionToValidateEmailFiels = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const [error, setError] = useState<ErrorsState | null>(null)
    const resetState = () => {
        setError( null )
    }
    const validateLoginForm = ( email: string, password: string) => {
        if (!regularExpresionToValidateEmailFiels.test(email)) {
            setError({ error: "email is not a type emai expression" })
            return false;
        }
        if (password.length < 6) {
            setError({ error: "password length should be min 6" })
            return false;
        }
        setError( null )
        return true;
    }
    const validateRegisterForm = (name: string, email: string, password: string, confirmPassword: string) => {
        if (name.length < 3) {
            setError({ error: 'name length should be min 3' })
            return false;
        }
        if (!regularExpresionToValidateEmailFiels.test(email)) {
            setError({ error: 'email should be like @something.com' })
            return false;
        }
        if( password.length < 6){
            setError({ error: 'password min length' })
            return false;
        }
        if (password !== confirmPassword) {
            setError({ error: 'passwords do not match' })
            return false;
        }
        return true;
    }
    return {
        validateLoginForm,
        error,
        resetState,
        validateRegisterForm
    }
}