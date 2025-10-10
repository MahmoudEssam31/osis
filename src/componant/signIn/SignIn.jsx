import { Form, Formik } from "formik";
import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FieldWrapper from "../pages/homePage/common/fieldWrapper/FieldWrapper";
import { LoginValidation } from "../../validation/Validation";
import { useAuthStore } from "../store/handleUsers";
// import { useAuthStore } from "../store/handleUsers";

export default function SignIn({ onForgetPassword, onCreateAccount, onClose }) {
    // const { signIn } = useAuthStore();
    const { user, signIn , signOut } = useAuthStore(); // ✅ user الحالي من Zustand

    // لو المستخدم مسجل دخول مسبقًا
    if (user) {
        return (
            <div className="flex flex-col gap-3  items-center justify-center h-[50vh] text-lg">
                <h3 className="font-semibold border-2 border-[var(--main-color)] p-2 rounded-2xl">{user.email}</h3>
                <button  onClick={signOut} className="text-[var(--main-color)] ml-2 border-2 border-[var(--main-color)] p-2 rounded-2xl hover:bg-[var(--main-color)] hover:text-white duration-500">Sign out</button>
            </div>
        );
    }
    return (
        <div className="sign-in flex flex-col justify-center items-center gap-[1rem] overflow-y-auto xl:h-[calc(140vh-350px)] md:h-[calc(140vh-350px)]">
            <div className="sign-in-img h-[10rem] xl:mt-[10rem] mt-[9rem]">
                <img src="/sign/Squircle.png" alt="" className="h-[100%]" />
            </div>
            <h2 className="text-[1.2rem] font-bold">Welcome back</h2>
            <div className="sign-in-form flex flex-col justify-center gap-[1rem]">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(value) => {
                        const dataU = {
                            email: value.email,
                            password: value.password,
                        };
                        signIn(dataU);
                        onClose();
                        console.log(dataU);
                    }}
                    validationSchema={LoginValidation}>
                    <Form className="flex flex-col gap-[.5rem] ">
                        <FieldWrapper name="email" type="email" placeholder="hello@exam" className="w-[100%]" />
                        <FieldWrapper name="password" type="password" placeholder="Password" className="w-[100%] " />
                        <span onClick={onForgetPassword} className={"text-[.8rem] text-[var(--main-color)] flex flex-row justify-end cursor-pointer"}>
                            Forget Password
                        </span>
                        <button type="submit" className="inline-block w-[100%] h-[3rem] bg-[var(--main-color)] cursor-pointer text-white rounded-[1.5rem]">
                            Login
                        </button>
                    </Form>
                </Formik>
                <span className="text-[1rem] flex flex-row justify-center items-center ">-------------- OR --------------</span>
                <div className="link-container flex flex-col justify-center gap-[1rem]">
                    <a href="www.gmail.com" className="border rounded-2xl flex flex-row py-[.5rem] justify-center items-center gap-[.5rem]">
                        <FaGoogle fill="#4285F4" />
                        <span>continue with Google</span>
                    </a>
                    <a href="www.apple.com" className="border rounded-2xl flex flex-row py-[.5rem] justify-center items-center gap-[.5rem]">
                        <FaApple />
                        <span>continue with Apple</span>
                    </a>
                </div>
                <div className="link-container flex flex-row justify-center items-center gap-[.5rem]">
                    <span>Frist time here?</span>
                    <span onClick={onCreateAccount} to="/signUp" className="text-[var(--main-color)] cursor-pointer">
                        Create an account
                    </span>
                </div>
            </div>
        </div>
    );
}
