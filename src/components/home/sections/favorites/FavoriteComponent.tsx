import { useAuth } from "../../../../hooks/useAuth"
import { AccessDenied } from "../AccessDenied"

export const FavoriteComponent = () => {
    const { isAuthentificated } = useAuth()
    return (
        <>
            {
                !isAuthentificated?
                <AccessDenied />
                :
                <> You are authentificated</>
            }
        </>
    )
}