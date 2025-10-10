import { Form, Formik } from 'formik';
import React from 'react'
import FieldWrapper from '../pages/homePage/common/fieldWrapper/FieldWrapper';
import { NavLink } from 'react-router-dom';
import {resetPassword } from '../../validation/Validation';

export default function ForgetPassword({ onLogin }) {
    const [sentEmail, setSentEmail] = React.useState(false);
    return (
        <div className="forget-password flex flex-col mx-auto gap-[1.5rem] justify-center items-center md:max-w-[22rem] max-w-[16rem] ">
            <div className="forget-password-img lg:mt-[2rem] mt-[.5rem] lg:h-[10rem] md:h-[8rem] h-[7rem]">
                <img src="/sign/Squircle(2).png" alt="" className="h-[100%]" />
            </div>
            <h3>Enter your email and we'll send a link to reset your password</h3>
            <div className="form-reset w-full">
                <Formik
                    initialValues={{ email: "" }}
                    onSubmit={(value) => {
                        console.log(value);
                        // onClose();
                        setSentEmail(true);
                    }}
                    validationSchema={resetPassword}>
                    <Form className="flex flex-col gap-[.5rem] w-full">
                        <FieldWrapper name="email" type="email" placeholder="hello@exam" className="w-[100%]" />
                        <button type="submit" className="inline-block w-[100%] h-[3rem] bg-[var(--main-color)] cursor-pointer text-white rounded-[1.5rem]">
                           {sentEmail ? "Check Your Email" : "Reset Password"}
                        </button>
                    </Form>
                </Formik>
            </div>
            <p>
                Remember your password?{" "}
                <span className={"text-[var(--main-color)] cursor-pointer"} onClick={onLogin}>
                    {" "}
                    Back to login
                </span>
            </p>
        </div>
    );
}
