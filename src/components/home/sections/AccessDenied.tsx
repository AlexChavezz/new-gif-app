import logoSecurity from '../../../assests/undraw_security_re_a2rk.svg'
import styles from '../../../styles/homeStyles.module.css'

export const AccessDenied = () => {
    return (
        <article className={styles.favoriteInfoContainer}>
            <div className={styles.info}>
                <h3 className={styles.infoDescription}>Login to have access to this section</h3>
                <p className={styles.infoDescription}>When you login you can start to save gifs, all gifs that you save you can see on this page.</p>
            </div>
            <img
                src={logoSecurity}
                alt="security"
                className={styles.infoImg}
            />
        </article>
    )
}