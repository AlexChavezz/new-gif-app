export interface HistoryItemProps {
    value: string
    id: string
    history: never[],
    setHistory: React.Dispatch<React.SetStateAction<never[]>>
}