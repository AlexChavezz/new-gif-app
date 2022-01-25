import { useAuth } from "../../../../hooks/useAuth"
import { AccessDenied } from "../AccessDenied"
import styles from '../../../../styles/homeStyles.module.css' 
import { useFavoriteGifs } from "../../../../hooks/useFavoriteGifs"

export const FavoriteComponent = () => {
    const { isAuthentificated, auth } = useAuth()
    const { favoriteGifs, loadFavoritesGifs }  = useFavoriteGifs()
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