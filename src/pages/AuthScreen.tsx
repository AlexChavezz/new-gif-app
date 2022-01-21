import { Route, Routes } from 'react-router-dom'
import { LoginComponent, RegisterComponent } from '../components/auth/'
import styles from '../styles/authStyles.module.css'

export const AuthScreen = () => {
    return (
        <section className={styles.authContainer}>
            <Routes>
                <Route path="/login" element={<LoginComponent />}/>
                <Route path="/register" element={ <RegisterComponent /> }/>
            </Routes>
        </section>
    )
}
