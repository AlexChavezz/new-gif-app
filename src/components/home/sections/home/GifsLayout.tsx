import { useContext, useEffect, useState } from 'react'
import { Gif } from '../../../../context/gifsContext'
import { getGifs } from '../../../../helpers/getGifs';
import { GifItem } from './GifItem';

interface GifsLayoutProps {
    category: string 
}

export const GifsLayout = ({ category }:GifsLayoutProps) => {
    
    const { categories } = useContext( Gif )

    useEffect(() => {
        async function load(){
            const data = await getGifs( category )
            console.log(data)
        }
        load()
    }, [category]);
    return (
        <section>
            {
                // categories.map( gif => <GifItem {...gif}  key={ gif.id }/>)
            }
        </section>
    )
}