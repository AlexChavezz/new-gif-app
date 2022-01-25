import { addDoc, collection, connectFirestoreEmulator, doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { Gif } from "../../../../context/gifsContext";
import { db } from "../../../../firebase/config";
import { useAuth } from "../../../../hooks/useAuth";
import { useFavoriteGifs } from "../../../../hooks/useFavoriteGifs";
import { State } from "../../../../interfases/gifs.interfaces";
import styles from '../../../../styles/homeStyles.module.css'

export const Item = (element: State) => {
    const { auth } = useAuth()
    const {  favoriteGifs , setFavoriteGifs } = useContext( Gif )
    const saveItem = async () => {
        // addNewFavoriteGif(element)
        setFavoriteGifs([...favoriteGifs, element])
        await setDoc(doc(db,  `${auth?.sesion?.uid}`, `${element.id}`), element);
    }

    /*
    
    -> Fix refresh when favoriteGifsState changes
    
    */
    return (
        <div className={styles.gifTarget} key={element.id}>
            <img src={element.url} alt={element.title} className={styles.gifImg} />
            <div className={styles.gifTargetInfo}>
                <span className={styles.gifTargetInfoTitle}>{element.title}</span>
                <div className={styles.gifTargetButtonsContainer}>
                    <a href={element.giphyUrl} target="_blank" className={styles.gifTargetButton}>
                        View on Giphy
                    </a>
                    <button
                        className={styles.gifTargetButton}
                        onClick={saveItem}
                    > Add Favorites</button>
                </div>
            </div>
        </div>
    )
}