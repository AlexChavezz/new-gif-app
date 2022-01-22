import React from 'react';
import { useForm } from '../../../../hooks/useForm'
import styles from '../../../../styles/homeStyles.module.css'
import { Form, Input, SubmitButton } from '../../../form'

interface GifForm {
    search: string, 
}

export const GifForm = () => {
    
    const { values, handleChange } = useForm<GifForm>({
        search: ''
    });
    
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log( values.search )
    }

    return (
        <Form
            onSubmit={ e =>onSubmit(e)}
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