

export type FavoriteGifs = State[] | [{}]

export interface GifContext {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>,
    favoriteGifs:FavoriteGifs, 
    setFavoriteGifs: React.Dispatch<React.SetStateAction<FavoriteGifs>>
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