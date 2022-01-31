import { useAuth } from "../../../../hooks/useAuth"
import { AccessDenied } from "../AccessDenied"
import styles from '../../../../styles/homeStyles.module.css' 
import { useFavoriteGifs } from "../../../../hooks/useFavoriteGifs"
import { useContext } from "react"
import { FavoriteGifs } from "../../../../context/favoriteGifs"

export const FavoriteComponent = () => {
    const { isAuthentificated, auth } = useAuth()
    const { favoriteGifs }  = useContext( FavoriteGifs )
        console.log(favoriteGifs)
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