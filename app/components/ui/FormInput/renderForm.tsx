import { FormProps } from "./genericForm"

interface IRenderFormProps extends FormProps{ 
    fields: {
        type: string;
        name: string;
        required: boolean;
        label: string;
        autoComplete?: string;
    }[]
}


const RenderForm = ({register, errors, isSubmitting, fields}: IRenderFormProps) => {
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

