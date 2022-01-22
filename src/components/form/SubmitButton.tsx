import { InputButton } from "../../interfases/authInterfaces";

export const SubmitButton  = ({ value="submit", styles }:InputButton) => 
<input
    type="submit"
    className={ styles }
    value={ value }
/>
