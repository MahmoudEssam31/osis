import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import FieldWrapper from '../pages/homePage/common/fieldWrapper/FieldWrapper';
import { CreateValidation } from '../../validation/Validation';
import { useNavigate } from 'react-router-dom'; // 👈 عشان نعمل Redirect


export default function CreateAccount({ onClose, onLogin }) {
    // const navigate = useNavigate();
    return (
        <div className="create-account max-w-[20rem] mx-auto flex flex-col gap-[1rem] justify-center items-center">
            <div className="create-account mt-[-1rem] h-[10rem]">
                <img src="/sign/Squircle2.png" alt="" className="h-[100%]" />
            </div>
            <h2 className="text-[1.2rem]">Let's get your account set up</h2>
            <div className="create-account-form ">
                <Formik
                    validationSchema={CreateValidation}
                    initialValues={{ email: "", password: "", checkbox: false }}
                    onSubmit={(value) => {
                        console.log(value);
                        onLogin();
                        // navigate("/");
                    }}>
                    {({ errors, touched }) => (
                        <Form className="flex flex-col gap-[.4rem]">
                            <FieldWrapper name="email" type="email" placeholder="hello@exam" className="w-[100%]" />
                            <FieldWrapper name="password" type="password" placeholder="Password" className="w-[100%] " />
                            <div className="create-account-checkbox flex flex-row gap-[.5rem] justify-center items-start">
                                <label className="flex flex-row gap-[1rem] justify-center items-start">
                                    <Field
                                        type="checkbox"
                                        name="checkbox"
                                        className={`w-4 h-4 appearance-auto ${errors.checkbox && touched.checkbox ? "ring-2 ring-red-500" : "accent-[var(--main-color)]"}`}
                                    />
                                    <span className="">I agree to the Terms and Conditions of Furniture and acknowledge the Privacy Policy</span>
                                </label>
                                {/* <ErrorMessage name="checkbox" component="div" className="text-red-500 text-sm" /> */}
                            </div>
                            <button type="submit" className="inline-block w-[100%] h-[3rem] bg-[var(--main-color)] cursor-pointer text-white rounded-[1.5rem]">
                                Create account
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
