import { useContext, useEffect, useState } from 'react'
import { Gif } from '../../../../context/gifsContext'
import { GifItem } from './GifItem'
import styles from '../../../../styles/homeStyles.module.css'

export const GifsLayout = () => {
    const { categories } = useContext(Gif)
    return (
        <article className={ styles.gitTargetContainer }>
            {
                categories.map( category => 
                    <GifItem category={category} key={ `${category}${ Math.random().toString(36).slice(2)}`}/>
                )
            }
        </article>
    )
}

