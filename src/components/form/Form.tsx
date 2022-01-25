import { FormProps } from "../../interfases/formInterfaces"
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