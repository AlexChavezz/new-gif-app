import React from 'react';
import { useForm } from '../../../../hooks/useForm'
import styles from '../../../../styles/homeStyles.module.css'
import { Form, Input, SubmitButton } from '../../../form'
import { categoriesArray } from './HomeComponent';

interface GifForm {
    search: string
}

export const GifForm = ({ setCategories }:{ setCategories: React.Dispatch<React.SetStateAction<categoriesArray>>}) => {

    const { values, handleChange, reset } = useForm<GifForm>({
        search: ''
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if ( values.search.trim().length > 0 ) {
            setCategories(category => [values.search, ...category])
            // -> Get and save on localStorage 
            let h:any  = window.localStorage.getItem('history')
            const history = JSON.parse(h) || []
            window.localStorage.setItem('history',JSON.stringify([{
                value: values.search,
                id:Math.random().toString(36).slice(2)
            }, ...history]))
            reset()
        }
    }
    return (
        <Form
            onSubmit={e => onSubmit(e)}
            styles={styles.gifForm}
        >
            <Input
                styles={styles.gifInput}
                name="search"
                value={values.search}
                onChange={handleChange}
                placeHolder="Type to search"
            />
            <SubmitButton
                styles={styles.gifSubmit}
                value="search"
            />
        </Form>
    )
}  