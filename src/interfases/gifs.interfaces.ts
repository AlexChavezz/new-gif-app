


export interface GifContext {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>> 
}

export interface State {
    id: string
    title: string,
    url: string,
    giphyUrl: string
}
export interface GifItemProps {
    category: string,
}


// export type Categories = string[] 