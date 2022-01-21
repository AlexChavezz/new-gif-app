import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Form, SubmitButton, Input, Label } from '../form';
import styles from '../../styles/authStyles.module.css'
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'

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
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }
    return (
        <Form
            onSubmit={(e) => onSubmit(e)}
        >
            <div className={styles.formGroup}>
                <Input
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeHolder="Name"
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