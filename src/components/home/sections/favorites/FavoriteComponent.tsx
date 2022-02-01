import { useAuth } from "../../../../hooks/useAuth"
import { AccessDenied } from "../AccessDenied"
import styles from '../../../../styles/homeStyles.module.css' 
import { ShowFavoriteGifs } from "./ShowFavoriteGiifs"

export const FavoriteComponent = () => {
    const { isAuthentificated } = useAuth()
    return (
        <section className={styles.container}>
            {
                !isAuthentificated ?
                    <AccessDenied />
                    :
                    <ShowFavoriteGifs />
            }

        </section>
    )
}