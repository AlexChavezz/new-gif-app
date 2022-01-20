import { ChangeEvent, useState } from "react";

export function useForm<T>(initalState: T){
// export const useForm = ( initialState: T ): T => {
    const [values, setValues] = useState( initalState )

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values, 
        handleChange, 
    }
}