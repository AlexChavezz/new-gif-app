import { RegisterForm } from "./RegisterForm";
import styles from '../../styles/authStyles.module.css'
import { Link } from "react-router-dom";

export const RegisterComponent = () => {
    return (
        <article className={styles.formContainer}>
            <header>
                <h2 className={styles.headerTitle}>REGISTER</h2>
            </header>
            <RegisterForm />
            <footer>
                <p className={styles.p}>You have an account</p>
                <Link to="/auth/login" className={styles.link}>Login </Link>
            </footer>
        </article>
    )
};
