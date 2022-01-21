import { Form, Input, SubmitButton } from "../form"
import styles from '../../styles/authStyles.module.css'
import { Label } from "../form/Label"
import React, { useRef, useState } from "react"
import { useForm } from "../../hooks/useForm"
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'
import emaiLogo from '../../assests/email_black_24dp.svg'
interface RegisterFormValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}


export const RegisterForm = () => {

    const { values, handleChange } = useForm<RegisterFormValues>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { name, email, password, confirmPassword } = values;
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <Form
            onSubmit={onSubmit}
        >
            <div className={styles.formGroup}>
                <Input
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeHolder="Name"
                />
                <Label
                    img={{
                        src: userLogo,
                        alt: "user-img"
                    }}
                />
            </div>
            <div className={styles.formGroup}>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeHolder="Email"
                />
                <Label
                    img={{
                        src: emaiLogo,
                        alt: "email-img"
                    }}
                />
            </div>
            <div className={styles.formGroup}>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeHolder="Password"

                />
                <Label
                    img={{
                        src: passwordLogo,
                        alt: "password-img"
                    }}
                />
            </div>
            <div className={styles.formGroup}>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    placeHolder="Repeat Password"
                />
                <Label
                    img={{
                        src: passwordLogo,
                        alt: "password-img"
                    }}
                />
            </div>
            <SubmitButton value="Register" />
        </Form>
    )
}