import { useForm } from '../../hooks/useForm'
import { Form, SubmitButton, Input, Label } from '../form'
import styles from '../../styles/authStyles.module.css'
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'
import { useAuth } from '../../hooks/useAuth'
import { AlertError } from './AlertError'
import { useValidateForm } from '../../hooks/useValidateForm'

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
    const { logInWithOutToken, setIsLoading } = useAuth()
    const { validateLoginForm, error, resetState } = useValidateForm()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setIsLoading( true )
        if (validateLoginForm(email, password)) {
            logInWithOutToken(email, password)
            resetState()
        }
    }
    return (
        <Form
            onSubmit={(e) => onSubmit(e)}
        >
            <div className={styles.formGroup}>
                <Input
                    styles={styles.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeHolder="Email"
                />
                <Label img={{
                    src: userLogo,
                    alt: "user-img"
                }} />
            </div>
            <div className={styles.formGroup}>
                <Input
                    styles={styles.input}
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
            <SubmitButton value="Login" styles={styles.submit} />
            {
                error &&
                <AlertError title={error.error} />

            }
        </Form>
    )
}