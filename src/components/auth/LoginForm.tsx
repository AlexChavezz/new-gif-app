import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { Form, SubmitButton, Input, Label } from '../form'
import styles from '../../styles/authStyles.module.css'
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'
import { Auth } from '../../context/authContext'

interface LoginFormData {
    email: string,
    password: string
}

export const LoginForm = () => {
    const { values, handleChange } = useForm<LoginFormData>({
        email: '',
        password: ''
    });
    const { email, password } = values;
    const { setState, setIsAuthentificated } = useContext(Auth)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch("http://localhost:8080/api/auth/login", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                email, 
                password,
            })
        })
        .then( res=> res.json() )
        .then( res => {
            setIsAuthentificated(true)
            setState( res )
            localStorage.setItem( 'token', JSON.stringify( res.token ))
        })
    }

    return (
        <Form
            onSubmit={(e) => onSubmit(e)}
        >
            <div className={styles.formGroup}>
                <Input
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
            <SubmitButton value="Login" />
        </Form>
    )
}