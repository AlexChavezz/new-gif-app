import { useContext, useEffect, useState } from 'react'
import { Gif } from '../../../../context/gifsContext'
// import { getGifs } from '../../../../helpers/getGifs';
// import { useFetchGif } from '../../../../hooks/useFetchGif';
import { GifItem } from './GifItem'
import styles from '../../../../styles/homeStyles.module.css'
import { useFetchGif } from '../../../../hooks/useFetchGif'

export const GifsLayout = () => {
    const { categories } = useContext(Gif)
    // const numeros :string[] = ['alexis', 'jose', 'maria']
    return (
        <article className={ styles.gitTargetContainer }>
            {
                categories.map( category => 
                    <GifItem category={category} key={ category }/>
                )
            }
        </article>
    )
}

