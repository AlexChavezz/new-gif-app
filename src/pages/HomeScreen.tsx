import { Link } from "react-router-dom"
import styles from '.././styles/homeStyles.module.css'

export const HomeScreen = () => {
    return (
        <section className={styles.container} >
            <header className={styles.header}>
                <div>
                    <Link to="/" className={styles.headerTitle} >
                        <h1>Giff-App</h1>
                    </Link>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link to="/" className={styles.listLink}>Home</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/" className={styles.listLink}>Favorites</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/" className={styles.listLink}>History</Link>
                        </li>
                        <li className={styles.listItemLine  }></li>
                        <li className={styles.listItemAuth  }>
                            <Link to="/auth/login" className={ styles.a }>Login</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    )
}