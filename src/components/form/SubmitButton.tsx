import { InputButton } from "../../interfases/formInterfaces";

export const SubmitButton  = ({ value="submit", styles }:InputButton) => 
<input
    type="submit"
    className={ styles }
    value={ value }
/>
