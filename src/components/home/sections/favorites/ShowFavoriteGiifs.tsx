import { deleteDoc, doc } from 'firebase/firestore'
import { Fragment } from 'react'
import { useContext } from "react"
import { FavoriteGifs } from "../../../../context/favoriteGifs"
import { db } from '../../../../firebase/config'
import { useAuth } from '../../../../hooks/useAuth'
import { State } from '../../../../interfases/gifs.interfaces'
import styles from '../../../../styles/homeStyles.module.css'

export const ShowFavoriteGifs = () => {
    const { favoriteGifs } = useContext(FavoriteGifs);
    if (!favoriteGifs) {
        return <></>
    }
    return (
        <section>
            <article className={styles.favoriteContainer}>
                {
                    favoriteGifs.length > 0?
                    favoriteGifs.map((element) => <Gif {...element} key={element.id}  />)
                    :
                    <p className={ styles.favoriteContainerParrafo }>Ther is not gifs to show</p>
                }
            </article>
        </section>
    )
}

const Gif = (element:State) => {
    const { favoriteGifs, setFavoriteGifs } = useContext(FavoriteGifs)
    const { auth } = useAuth()
    const deleteItem = () => {
        //  -> delete from state
        setFavoriteGifs(favoriteGifs.filter( gif => gif.id !== element.id))
        //-> delete from firestore
        if( auth?.sesion ){
            deleteDoc(doc(db, auth.sesion.uid ,element.id))
        }
    }

    return (
        <div className={styles.gifTarget}>
            <img src={element.url} alt={element.title} className={styles.gifImg} />
            <div className={styles.gifTargetInfo}>
                <span className={styles.gifTargetInfoTitle}>{element.title}</span>
                <div className={styles.gifTargetButtonsContainer}>
                    <a href={element.giphyUrl} target="_blank" className={styles.gifTargetButton}>
                        View on Giphy
                    </a>
                    <button
                        className={styles.gifTargetButton}
                    onClick={deleteItem}
                    > Delete Gif</button>
                </div>
            </div>
        </div>
    )
}