import React from "react";
import { IoClose } from "react-icons/io5";
import { useHandleFavList } from "./store/HandleFavList";
import { Field, Form, Formik } from "formik";
import FieldWrapper from "./pages/homePage/common/fieldWrapper/FieldWrapper";
import clsx from "clsx";
import { CheckoutValidation } from "../validation/Validation";
import FavoritePage from "./store/FavoritePage";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/handleUsers";
// import { handleUsers } from "./store/handleUsers"; // 👈 نفس الاسم اللي صدرته

export default function Checkout({ onNext, onBack, step }) {
    const { favList, addToFavList } = useHandleFavList();
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const { user } = useAuthStore(); // ✅ جِب المستخدم من Zustand

    React.useEffect(() => {
        if (user && step === 2) {
            onNext();
        }
    }, [user, step, onNext]);

    if (user) {
        return <div className="flex items-center justify-center h-[50vh] text-lg">Redirecting to payment...</div>;
    }

    return (
        <div className="buy-page relative  w-full min-h-screen z-70 mt-[-5rem] flex flex-col items-center justify-center ">
            <div
                className="buy-page-content items-center flex flex-col max-w-md bg-white 
                xl:max-h-[90vh] md:max-h-[140vh] overflow-y-auto gap-[.1rem] px-10 pt-[3rem] ">
                <h2 className="font-semibold text-[1.125rem] mt-[-2.5rem]">Customer Information</h2>
                <span className="text-[.8rem] text-[#5f6980]">
                    Have an account? <span className="text-[var(--main-color)] cursor-pointer">Login</span>
                </span>
                <Formik
                    initialValues={{
                        email: "",
                        firstName: "",
                        lastName: "",
                        countryCode: "+20",
                        phoneNumber: "",
                        address: "",
                        city: "",
                        country: "",
                    }}
                    onSubmit={(value) => {
                        console.log(value);
                        onNext();
                    }}
                    validationSchema={CheckoutValidation}>
                    <Form action="" className="flex flex-col gap-[.6rem] md:mt-[1rem]">
                        <FieldWrapper name="email" type="email" placeholder="hello@example" className="w-[100%]" />
                        <h3>Shipping address</h3>
                        <FieldWrapper name="firstName" type="text" placeholder="First name" className="w-[100%]" />
                        <FieldWrapper name="lastName" type="text" placeholder="Last name" className="w-full" />
                        <div className="flex w-full ">
                            {/* select country code */}
                            <Field as="select" name="countryCode" className="p-2 border border-gray-300 rounded-l-2xl bg-white text-gray-600">
                                <option value="+20">🇪🇬 +20</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+971">🇦🇪 +971</option>
                            </Field>

                            <Field name="phoneNumber" type="text" placeholder="123456789" className="p-2 border border-gray-300 rounded-r-2xl  w-full" />
                        </div>
                        <FieldWrapper name="address" type="text" placeholder="Address" className="w-full" />
                        <div className="city flex flex-row w-full gap-[.5rem]">
                            <FieldWrapper name="city" className="w-[100%]" type="text" placeholder="City" />
                            <FieldWrapper name="country" className="w-[100%] " type="text" placeholder="Country" />
                        </div>
                        <div className="btn-submit absolute bottom-[-.5rem] w-full -mx-[7.3rem]  flex flex-row justify-between gap-1 ">
                            <button onClick={onBack} type="button" className="back-btn flex justify-center items-center w-[25%] h-[3rem] bg-[var(--main-color)] cursor-pointer text-white">
                                back
                            </button>
                            <button
                                type="submit"
                                className="flex  justify-center items-center w-full 
                                 h-[3rem] bg-[var(--main-color)] cursor-pointer text-white">
                                Proceed to payment
                            </button>
                        </div>
                    </Form>
                </Formik>
                {/* </div> */}
            </div>
            {/* </div> */}
        </div>
    );
}
