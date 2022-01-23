import { useContext, useEffect, useState } from 'react'
import { Gif } from '../../../../context/gifsContext'
import styles from '../../../../styles/homeStyles.module.css'
import { GifForm } from './GifForm'
import { GifsLayout } from './GifsLayout'


export const HomeComponent = () => {

    // const { categories, setCategories } = useContext( Gif )
    const [ category, setCategory ] = useState('')

    return (
        <section className={ styles.container }>
            <article className={ styles.gifFormContainer }>
                <GifForm setCategory={setCategory} />
                <GifsLayout category={category} />
            </article>
        </section>
        )
}