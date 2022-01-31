

export type FavoriteGifsType = State[] | [{}]

export interface FavoritGifsContext {
    favoriteGifs:FavoriteGifsType,
    setFavoriteGifs:React.Dispatch<React.SetStateAction<FavoriteGifsType>>
}

export interface GifContext {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>,
}

export interface State {
    id: string,
    title: string,
    url: string,
    giphyUrl: string
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export interface GifItemProps {
    category: string,
}


// export type Categories = string[] 