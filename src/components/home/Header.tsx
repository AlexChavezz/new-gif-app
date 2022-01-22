import styles from '../../styles/homeStyles.module.css'
import { Link } from "react-router-dom"
import { useAuth } from '../../hooks/useAuth'

export const Header = () => {

    const { isAuthentificated, logOut } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.headerTitleContainer}>
                <Link to="/" className={styles.headerTitle} >
                    <h1>Giff-App</h1>
                </Link>
            </div>
            <div className={styles.headerNavUl}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link to="/" className={styles.listLink}>Home</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to="/favorites" className={styles.listLink}>Favorites</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to="/history" className={styles.listLink}>History</Link>
                    </li>
                    <li className={styles.listItemLine}></li>
                    {
                        !isAuthentificated ?
                            (
                                <Link to="/auth/login" className={styles.a}>
                                    <li className={styles.listItemAuth}>
                                        LOGIN
                                    </li>
                                </Link>
                            ) : (
                                <li 
                                    className={styles.listItemAuth}
                                    onClick={ () => logOut() }
                                >
                                    LOGOUT
                                </li>
                            )
                    }
                </ul>
            </div>
        </header>
    )
}