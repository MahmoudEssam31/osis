import React from 'react'
import FieldWrapper from '../pages/homePage/common/fieldWrapper/FieldWrapper';
import { Form } from 'react-router-dom';
import { Formik } from 'formik';
import { PaymentValidation } from '../../validation/Validation';

export default function Payment({ onNext, onBack }) {
    return (
        <div className="buy-page  w-full min-h-screen z-70 mt-[2rem] flex flex-col items-center justify-between ">
            <div
                className="buy-page-content  flex flex-col max-w-md bg-white 
                 xl:h-[80vh]   md:h-[140vh] overflow-y-hidden gap-[.1rem] px-10 pt-[3rem] ">
                <Formik
                    intialValues={{ cardNumber: "", NameOnCard: "", expirationDate: "", cvv: "" }}
                    onSubmit={(value) => {
                        console.log(value);
                    }}
                    validationSchema={PaymentValidation}>
                    <Form action="" className="flex flex-col gap-[.9rem] md:mt-[1rem]">
                        <FieldWrapper name="cardNumber" type="text" placeholder="Card number" className="w-[100%]" />
                        <div className="city flex flex-row w-full gap-[.5rem]">
                            <FieldWrapper name="expirationDate" className="w-[100%]" type="date" placeholder="Exp. date" />
                            <FieldWrapper name="cvv" className="w-[100%] " type="CVV" placeholder="CVV" />
                        </div>
                        <FieldWrapper name="NameOnCard" type="text" placeholder="Name on card" className="w-[100%]" />
                        <checkbox className="mt-[-1rem] mb-2" type="checkbox" />
                        <div className="btn-submit absolute bottom-[.05rem] w-full -mx-[7.3rem]  flex flex-row justify-between gap-1 ">
                            <button onClick={onBack} type="button" className="back-btn flex justify-center items-center w-[25%] h-[3rem] bg-[var(--main-color)] cursor-pointer text-white">
                                back
                            </button>
                            <button
                                onClick={onNext}
                                type="submit"
                                className="flex  justify-center items-center w-full 
                                 h-[3rem] bg-[var(--main-color)] cursor-pointer text-white">
                                Pay Now
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
