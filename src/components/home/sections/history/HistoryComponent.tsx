import { useEffect, useState } from 'react';
import styles from '../../../../styles/homeStyles.module.css'
import empty from '../../../../assests/undraw_blank_canvas_re_2hwy.svg'
export const HistoryComponent = () => {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(JSON.parse(window.localStorage.getItem('history')) || [])
    }, [])

    const clearLocalStorage = () => {
        window.localStorage.removeItem('history')
        setHistory([])
    }

    return (
        <section className={styles.container}>
            <article className={styles.historyDelete}>
                {
                    history.length > 0 &&
                    <button
                        onClick={clearLocalStorage}
                        className={styles.historyButtonDeleteAll}
                    >
                        Delete All
                    </button>
                }
            </article>
            {
                history.length === 0 ?
                    <div className={styles.imgHistoryContainer}>
                        <img
                            src={empty}
                            alt="empty"
                        // className={ styles.historyImg}    
                        />
                    </div>
                    :
                    <table className={styles.historyTable}>
                        <thead>
                            <tr>
                                <th>
                                    Word
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.map((element: HistoryItemProps) =>
                                    <HistoryItems {...element} key={`${element}${element.id}`} history={history} setHistory={setHistory} />
                                )
                            }
                        </tbody>
                    </table>
            }
        </section>
    )
}

interface HistoryItemProps {
    value: string
    id: string
    history: never[],
    setHistory: React.Dispatch<React.SetStateAction<never[]>>
}

const HistoryItems = ({ value, id, history, setHistory }: HistoryItemProps) => {

    const handleDelete = () => {
        const newHistory = history.filter(element => element.id !== id)
        setHistory(newHistory)
        window.localStorage.setItem('history', JSON.stringify(newHistory))
    }

    return (
        <tr>
            <td className={styles.td}>
                {
                    value
                }
            </td>
            <td className={styles.td}>

            </td>
            <td className={styles.td}>
                <button
                    onClick={() => handleDelete()}
                    className={styles.tableDeleteButton}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}