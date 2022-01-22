import { FormProps } from "../../interfases/authInterfaces"
import styles from '../../styles/authStyles.module.css'

export const Form = ({ children, onSubmit, styles }:FormProps) => {
    return (
        <form
            onSubmit={ (e) => onSubmit(e) }
            className={ styles }
        >
            { children }
        </form>
    )
}