import React, { useContext, useState } from "react";
import { FavoriteGifs } from "../../../../context/favoriteGifs";
import { sendGifToFirebase } from "../../../../helpers/favoriteGifs";
import { useAuth } from "../../../../hooks/useAuth";
import { State } from "../../../../interfases/gifs.interfaces";
import styles from '../../../../styles/homeStyles.module.css'

export const Item = React.memo((element: State) => {
    const { auth } = useAuth();
    const { favoriteGifs, setFavoriteGifs } = useContext(FavoriteGifs)

    const saveItem = () => {
        if( favoriteGifs.find( gif => gif.id === element.id) ){
            return;
        }
        if( !auth?.sesion ){
            return;
        }
        sendGifToFirebase(auth, element)
        setFavoriteGifs([...favoriteGifs, element])
    }

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