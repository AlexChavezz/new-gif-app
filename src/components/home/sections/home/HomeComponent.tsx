import { useState } from 'react';
import styles from '../../../../styles/homeStyles.module.css'
import { GifForm } from './GifForm'
import { GifsLayout } from './GifsLayout'

export type categoriesArray = string[] | [];

export const HomeComponent = () => {

    const [ categories, setCategories ] = useState<categoriesArray>([]);


    return (
        <section className={styles.container}>
            <article className={styles.gifFormContainer}>
                <GifForm setCategories={setCategories}/>
                <GifsLayout  categories={categories} setCategories={setCategories}/>
            </article>
        </section>
    )
}
