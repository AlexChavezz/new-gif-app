import React, { useContext, useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import styles from '../../../../styles/homeStyles.module.css'
import { categoriesArray } from './HomeComponent'

interface GifLayoutProps {
    categories: categoriesArray,
    setCategories: React.Dispatch<React.SetStateAction<categoriesArray>>
}

export const GifsLayout =React.memo(({categories, setCategories}:GifLayoutProps) => {
    return (
        <article className={ styles.gitTargetContainer }>
            {
                categories.map( category => 
                    <GifItem category={category} key={ `${category}${ Math.random().toString(36).slice(2)}`} />
                )
            }
        </article>
    )
})

