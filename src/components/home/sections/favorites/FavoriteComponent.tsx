import { useAuth } from "../../../../hooks/useAuth"
import { AccessDenied } from "../AccessDenied"
import styles from '../../../../styles/homeStyles.module.css' 

export const FavoriteComponent = () => {
    const { isAuthentificated, auth } = useAuth()
    console.log(auth);
    
    return (
        <section className={styles.container}>
            {
                !isAuthentificated ?
                    <AccessDenied />
                    :
                    <> You are authentificated</>
            }

        </section>
    )
}