// import { useContext, useEffect } from 'react'
// import { Gif } from '../../../../context/gifsContext'
import { useFetchGif } from '../../../../hooks/useFetchGif'
import styles from '../../../../styles/homeStyles.module.css'

interface State {
    id: string
    title: string,
    url: string,
}


export const GifItem = ({ category }: { category: string }) => {
    // const { categories } = useContext(Gif)
    const state = useFetchGif(category)
    console.log( state)
    if (state.loading) {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        )
    }
    return (
        <>
        {category}
            {
                state.data.map((element: State) =>
                    <div className={styles.gifTarget} key={element.id}>
                        <img src={element.url} alt={element.title} className={ styles.gifImg} />
                    </div>
                )
            }
        </>
    )
}