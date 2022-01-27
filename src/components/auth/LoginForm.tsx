import { useForm } from '../../hooks/useForm'
import { Form, SubmitButton, Input, Label } from '../form'
import styles from '../../styles/authStyles.module.css'
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'

interface LoginFormData {
    email: string,
    password: string
}

type ErrorsState = {
    name: string
}[]

const initialState = [{name:''}]

export const LoginForm = () => {
    const [error, setErrors] = useState<ErrorsState>(initialState)
    const { values, handleChange } = useForm<LoginFormData>({
        email: '',
        password: ''
    });
    const { email, password } = values;
    const { logInWithOutToken, setIsLoading } = useAuth()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setIsLoading( true )
        if (validateFields()) {
            logInWithOutToken(email, password)
        }
    }
    const validateFields = () => {
        const regularExpresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!regularExpresion.test(email)) {
            setErrors([{ name: "email is not a emai" }])
            return false;
        }
        if (password.length < 6) {
            setErrors([{ name: "password length should be min 6" }])
            return false;
        }
        setErrors( initialState )
        return true;
    }
    return (
        <Form
            onSubmit={(e) => onSubmit(e)}
        >
            <div className={styles.formGroup}>
                <Input
                    styles={styles.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeHolder="Email"
                />
                <Label img={{
                    src: userLogo,
                    alt: "user-img"
                }} />
            </div>
            <div className={styles.formGroup}>
                <Input
                    styles={styles.input}
                    type="password"
                    name="password" value={password}
                    onChange={handleChange}
                    placeHolder="Password"
                />
                <Label img={{
                    src: passwordLogo,
                    alt: "password-img"
                }} />
            </div>
            <SubmitButton value="Login" styles={styles.submit} />
            {
                error[0].name.length > 0 &&
                <div className={styles.errorsContainer}>
                    { error[0].name }
                </div>
            }
        </Form>
    )
}