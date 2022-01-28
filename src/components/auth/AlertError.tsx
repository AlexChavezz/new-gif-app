import styles from '../../styles/authStyles.module.css'

interface AlertErrorProps {
    title: string
}

export const AlertError = ({ title }:AlertErrorProps) => {
    return (
        <div className={styles.errorsContainer}>
            { title }
        </div>
    )
}