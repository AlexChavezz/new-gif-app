import { FormProps } from "../../interfases/authInterfaces"

export const Form = ({ children, onSubmit }:FormProps) => {
    return (
        <form
            onSubmit={ (e) => onSubmit(e) }
        >
            { children }
        </form>
    )
}