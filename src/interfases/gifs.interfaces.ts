

export interface GifContext {
    categories: Categories,
    setCategories: React.Dispatch<React.SetStateAction<Gif[]>> 
}

export interface Gif {
    id: string, 
    title: string,
    url: string
}

export type Categories = Gif[]