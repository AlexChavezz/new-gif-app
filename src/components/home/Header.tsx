import styles from '../../styles/homeStyles.module.css'
import { Link, NavLink } from "react-router-dom"
import { useAuth } from '../../hooks/useAuth'

export const Header = () => {

    const { isAuthentificated, logout } = useAuth();

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
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? { color: 'gold', textDecoration: 'none' } : { color: '#fff', textDecoration: 'none' }
                            }
                        >Home</NavLink>
                    </li>
                    <li className={styles.listItem}>
                        <NavLink
                            to="/favorites"
                            style={({ isActive }) =>
                                isActive ? { color: 'gold', textDecoration: 'none' } : { color: '#fff', textDecoration: 'none' }
                            }
                        >Favorites</NavLink>
                    </li>
                    <li className={styles.listItem}>
                        <NavLink
                            to="/history"
                            style={({ isActive }) =>
                                isActive ? { color: 'gold', textDecoration: 'none' } : { color: '#fff', textDecoration: 'none' }
                            }
                        >History</NavLink>
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
                                    onClick={() => logout()}
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