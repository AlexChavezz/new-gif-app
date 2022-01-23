import React, { useContext } from 'react';
import { Gif } from '../../../../context/gifsContext';
import { useForm } from '../../../../hooks/useForm'
import styles from '../../../../styles/homeStyles.module.css'
import { Form, Input, SubmitButton } from '../../../form'

interface GifForm {
    search: string 
}

export const GifForm = () => {
    
    const { values, handleChange } = useForm<GifForm>({
        search: ''
    });

    const { setCategories } = useContext( Gif )

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setCategories( category => [values.search, ...category])
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