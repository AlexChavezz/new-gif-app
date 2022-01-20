import { Link } from 'react-router-dom'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../styles/authStyles.module.css'

export const AuthScreen = () => {
    return (
        <section className={styles.authContainer}>
            <article className={styles.formContainer}>
                <LoginForm />
            </article>
        </section>
    )
}