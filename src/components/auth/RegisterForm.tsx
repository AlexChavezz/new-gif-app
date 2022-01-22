import { Form, Input, SubmitButton } from "../form"
import styles from '../../styles/authStyles.module.css'
import { Label } from "../form/Label"
import { useForm } from "../../hooks/useForm"
import userLogo from '../../assests/person_black_24dp.svg'
import passwordLogo from '../../assests/lock_black_24dp.svg'
import emaiLogo from '../../assests/email_black_24dp.svg'
import { useAuth } from "../../hooks/useAuth"
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

    const { setState, setIsAuthentificated, state } = useAuth()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await response.json()
            if (data.user) {
                window.localStorage.setItem('token', JSON.stringify(data.token))
                setState({
                    sesion: {
                        email: data.user.email,
                        name: data.user.name,
                        uid: data.user.uid,
                        token: data.token
                    }
                })
                setIsAuthentificated(true)
                console.log(state)
            }
        } catch (error) {
            console.log(error)
        }

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