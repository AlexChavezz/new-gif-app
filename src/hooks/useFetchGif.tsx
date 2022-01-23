import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

interface State {
    data:[], 
    loading: boolean
}


export const useFetchGif = ( category: string):State => {
    const [ state, setState ] = useState<State>({
        data: [], 
        loading: true
    })
    useEffect(() => {
        getGifs( category ).then( imgs => setState({
            data: imgs, 
            loading: false
        }))
    }, [category])
    return state;
}