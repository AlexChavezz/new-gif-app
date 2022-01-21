import { InputButton } from "../../interfases/authInterfaces";
import styles from '../../styles/authStyles.module.css'

export const SubmitButton  = ({ value="submit" }:InputButton) => 
<input
    type="submit"
    className={ styles.submit}
    value={ value }
/>
