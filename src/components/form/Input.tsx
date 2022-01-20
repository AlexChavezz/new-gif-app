import { InputProps } from "../../interfases/authInterfaces";

export const Input = ({ name, value, onChange, type="text", placeHolder="" }: InputProps) =>
    <input
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
/>