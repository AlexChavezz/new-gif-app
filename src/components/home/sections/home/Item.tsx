import { useAuth } from "../../../../hooks/useAuth";
import { State } from "../../../../interfases/gifs.interfaces";
import styles from '../../../../styles/homeStyles.module.css'

export const Item = (element: State) => {
    const { auth } = useAuth()

    const saveItem = () => {
        
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
                        onClick={() => {
                            console.log(auth)
                        }}
                    > Add Favorites</button>
                </div>
            </div>
        </div>
    )
}