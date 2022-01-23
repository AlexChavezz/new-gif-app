import { Gif } from "../../../../context/gifsContext"

interface GifItemProps {
    id: string, 
    url: string, 
    title: string,
    images: {
        downsized_medium: {
            url: string
        }
    }
}

export const GifItem = ({ gif }: GifItemProps) => {
    return (
        <article>
            { gif.title }
        </article>
    )
}