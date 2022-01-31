import { addDoc, collection, connectFirestoreEmulator, doc, setDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FavoriteGifs } from "../../../../context/favoriteGifs";
import { sendGifToFirebase } from "../../../../helpers/favoriteGifs";
import { useAuth } from "../../../../hooks/useAuth";
import { useFavoriteGifs } from "../../../../hooks/useFavoriteGifs";
import { State } from "../../../../interfases/gifs.interfaces";
import styles from '../../../../styles/homeStyles.module.css'

export const Item = React.memo((element: State) => {
    const { auth, isAuthentificated } = useAuth();
    const { favoriteGifs, setFavoriteGifs }  = useContext( FavoriteGifs )

    const saveItem = () => {
        sendGifToFirebase(auth, element)
        setFavoriteGifs([...favoriteGifs, element])
    }
    console.log('me genere ')
    /*
    
    -> Fix refresh when favoriteGifsState changes
    -> try to move  category state to a level less
    
    
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
                        onClick={() => saveItem()}
                    > Add Favorites</button>
                </div>
            </div>
        </div>
    )
})