import styles from '../../../../styles/homeStyles.module.css'
import { Input } from '../../../form'
import { GifForm } from './GifForm'

export const HomeComponent = () => {
    return (
        <section className={ styles.container } >
            <article className={ styles.gifFormContainer }>
                <GifForm />
            </article>
        </section>
        )
}