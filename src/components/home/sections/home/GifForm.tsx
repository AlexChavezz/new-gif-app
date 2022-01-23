import React from 'react';
import { useForm } from '../../../../hooks/useForm'
import styles from '../../../../styles/homeStyles.module.css'
import { Form, Input, SubmitButton } from '../../../form'

interface GifForm {
    search: string, 
}
interface GifFormProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const GifForm = ({ setCategory }: GifFormProps) => {
    
    const { values, handleChange } = useForm<GifForm>({
        search: ''
    });
    
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setCategory( values.search)
    }

    return (
        <Form
            onSubmit={ e => onSubmit(e)}
            styles={ styles.gifForm }
        >
            <Input 
                styles={ styles.gifInput }
                name="search" 
                value={ values.search } 
                onChange={handleChange}
                placeHolder="Type to search"
            />
            <SubmitButton 
                styles={ styles.gifSubmit}
                value="search"
            />
        </Form>
        )
}  