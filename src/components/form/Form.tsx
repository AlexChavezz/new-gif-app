import { FormProps } from "../../interfases/authInterfaces"
import styles from '../../styles/authStyles.module.css'

export const Form = ({ children, onSubmit }:FormProps) => {
    return (
        <form
            onSubmit={ (e) => onSubmit(e) }
            className={ styles.form }
        >
            { children }
        </form>
    )
}