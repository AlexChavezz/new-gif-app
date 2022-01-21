import { LoginForm } from './LoginForm';
import styles from '../../styles/authStyles.module.css'
import { Link } from 'react-router-dom'

export const LoginComponent = () => {
    return (
        <article className={styles.formContainer}>
            <header>
                <h2 className={styles.headerTitle}>LOGIN</h2>
            </header>
            <LoginForm />
            <footer>
                <p className={styles.p}>You no have an account?</p>
                <Link to="/auth/register" className={styles.link}>Register</Link>
            </footer>
        </article>
    )
};
