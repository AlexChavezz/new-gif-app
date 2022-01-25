import { useEffect, useState, useRef } from "react"
import { getGifs } from "../helpers/getGifs"

interface State {
    data: [],
    loading: boolean
}


export const useFetchGif = (category: string): State => {
    const [state, setState] = useState<State>({
        data: [],
        loading: true
    })
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    })

    useEffect(() => {
        getGifs(category).then(imgs => {
            if (isMounted.current) {
                setState({
                    data: imgs,
                    loading: false
                })
            }
        })
    }, [category])
    return state;
}