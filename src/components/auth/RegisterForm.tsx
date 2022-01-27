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

    const { createNewUser, setIsLoading } = useAuth()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createNewUser( name, email, password, confirmPassword )
    }

    return (
        <Form
            onSubmit={onSubmit}
        >
            <div className={styles.formGroup}>
                <Input
                    styles={ styles.input }
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
                    styles={ styles.input }
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
                    styles={ styles.input }
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
                    styles={ styles.input }
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
            <SubmitButton value="Register" 
                styles={ styles.submit }
            />
        </Form>
    )
}