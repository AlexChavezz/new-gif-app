import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Form, SubmitButton, Input } from '../form';

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
            <Input name="email" value={email} onChange={handleChange} />
            <Input type="password" name="password" value={password} onChange={handleChange} />
            <SubmitButton />
        </Form>
    )
}