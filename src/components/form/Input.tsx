import { InputProps } from "../../interfases/authInterfaces";
// import styles from '../../styles/authStyles.module.css'



export const Input = ({ name, value, onChange, type="text", placeHolder, styles }: InputProps) =>
    <input
        type={type}
        className={ styles }
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
/>