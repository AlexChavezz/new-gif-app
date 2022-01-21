import { LabelProps } from "../../interfases/authInterfaces";
import styles from '../../styles/authStyles.module.css'

export const Label = ({ img }: LabelProps) =>
    <label
        className={styles.label}
    >
        {
            img &&
            <img
                src={img.src}
                alt={img.alt}
                className={styles.img}
            />
        }

    </label>