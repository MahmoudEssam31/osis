import clsx from 'clsx';
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function FieldWrapper({ name, type, placeholder, className, isDefult, isPassword }) {
    return (
        <div className={clsx("field-Wrapper  flex flex-col  justify-center items-start  w-full",className)}>
            <Field name={name} type={type} placeholder={placeholder} className={clsx("p-2  border border-gray-300 rounded-2xl ps-6", className)} />
            <ErrorMessage name={name} component="span" className="text-red-600 ms-3 text-[.8rem] text-start"  />
        </div>
    );
}
