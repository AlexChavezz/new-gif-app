import React from "react";
import { InputProps } from "../../interfases/formInterfaces";
// import styles from '../../styles/authStyles.module.css'



export const Input = ({ name, value, onChange, type = "text", placeHolder, styles }: InputProps) => {
    return (
        <input
            type={type}
            className={styles}
            placeholder={placeHolder}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
        />
    )
}