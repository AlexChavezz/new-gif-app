import React, { ChangeEvent, ReactElement } from "react";

export interface InputProps {
    type?: string,
    placeHolder?: string,
    name: string,
    value: string,
    onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

export interface InputButton {
    value?: string,
}

export interface FormProps {
    children: ReactElement | ReactElement[],
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}
export interface LoginAuthForm {
    email: string,
    password: string
}