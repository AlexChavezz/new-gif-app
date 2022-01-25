import { useEffect, useState } from 'react'
import styles from '../../../../styles/homeStyles.module.css'
import empty from '../../../../assests/undraw_blank_canvas_re_2hwy.svg'
import { HistoryItem } from './HistoryItem';

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
        <section className={styles.container }>
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
                                history.map((element:any) =>
                                    <HistoryItem {...element} key={`${element} ${element.id}`} history={history} setHistory={setHistory} />
                                )
                            }
                        </tbody>
                    </table>
            }
        </section>
    )
}