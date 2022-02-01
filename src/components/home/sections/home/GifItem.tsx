import React from 'react'
import { useFetchGif } from '../../../../hooks/useFetchGif'
import { GifItemProps, State } from '../../../../interfases/gifs.interfaces'
import styles from '../../../../styles/homeStyles.module.css'
import { Item } from './Item'

export const GifItem = React.memo(({ category }: GifItemProps) => {
    const state = useFetchGif(category)
    return (
        <>
            <p className={styles.gifTitlte} >{category}</p>
            {
                state.data.map((element: State) =>
                    <Item {...element} key={element.id} />
                )
            }
        </>
    )
})

