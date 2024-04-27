"use client"

import { useEffect } from "react";
import { useConfirmRedirectIfDirty } from "./useRedirectIfDirty";
import {FieldValues, useForm, UseFormRegister} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    // Where to GET/POST the form data
    url?: string

    // Function that returns a component that will display the inner form
    fields: {
        type: string;
        name: string;
        required: boolean;
        label: string;
        autoComplete?: string;
    }[]
}

// All values that come from useForm, to be used in our custom forms

const fetcher = (url: string) => fetch(url).then(r => r.json());



async function saveFormData(data: object, url: string) {
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
        method: "POST"
    })
}
export type FormProps = {
    register: UseFormRegister<FieldValues>
    isSubmitting: boolean
    errors: { [error: string]: any }
    fields: {
        type: string;
        name: string;
        required: boolean;
        label: string;
        autoComplete?: string;
    }[]
}

const RenderForm = ({register, errors, isSubmitting, fields}: FormProps) => {
    return( <>
        {fields.map(field => {
            return <>
                <label htmlFor={field.name}>{field.label}</label>
                <input type={field.type} autoComplete={field.autoComplete}
                       {...register(field.name, {required: field.required})} />
                <div className="error">{errors[field.name]?.message}</div>
            </>
        })}

        <button disabled={isSubmitting}>
            {isSubmitting ? "loading" : "Submit"}
        </button>
    </>)
}



function GenericForm({url, fields}: Props) {
    // Fetch our initial form data
    // const {data, error} = useSWR(url, fetcher)
    const {register, reset, handleSubmit, setError, formState: {isSubmitting, errors, isDirty}} = useForm();

    // Confirm redirects when isDirty is true
    // useConfirmRedirectIfDirty(isDirty)

    // Submit handler which displays errors + success messages to the user
    // const onSubmit = async (data: object) => {
    //     // const response = await saveFormData(data, url)

    //     if (response.status === 400) {
    //         // Validation error, expect response to be a JSON response {"field": "error message for that field"}
    //         const fieldToErrorMessage: { [fieldName: string]: string } = await response.json()
    //         for (const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)) {
    //             setError(fieldName, {type: 'custom', message: errorMessage})
    //         }
    //     } else if (response.ok) {
    //         // successful
    //         toast.success("Successfully saved")
    //     } else {
    //         // unknown error
    //         toast.error("An unexpected error occurred while saving, please try again")
    //     }
    // }

    // Sets the default value of the form once it's available
    // useEffect(() => {
    //     if (data === undefined) {
    //         return; // loading
    //     }
    //     reset(data);
    // }, [reset, data]);

    // Handle errors + loading state
    // if (error) {
    //     return <div>An unexpected error occurred while loading, please try again</div>
    // } else if (!data) {
    //     return <div>Loading...</div>
    // }

    // Finally, render the form itself
    return <form >
        {RenderForm({register, errors, isSubmitting, fields})}
        <ToastContainer position="bottom-center"/>
    </form>;
}

export default GenericForm