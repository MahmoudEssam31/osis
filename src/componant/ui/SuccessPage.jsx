import React from "react";
import { IoClose } from "react-icons/io5";
// import { useHandleFavList } from "./store/HandleFavList";

export default function SuccessPage({ onClose }) {
    // const { favList, addToFavList } = useHandleFavList();
    return (
        <div className="buy-page relative flex flex-col justify-between xl:min-h-[87vh] lg:min-h-[89vh] md:min-h-[85vh] min-h-[85vh] mt-[-2rem] ">
            <div className="buy-page-content-body flex flex-col justify-center items-center lg:ms-[4rem] md:ms-[6rem] ms-[1rem] relative   gap-[2rem] lg:max-w-[78%] max-w-[100%] ">
                <div className="buy-page-content-body-img flex md:w-[55%] w-[40%] h-[100%] justify-center items-center gap-3 flex-col">
                    <img src="/Squircle.png" alt="" />
                </div>
                <h2>Your Order is Confirmed!</h2>
                <p>Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</p>
                <button onClick={onClose} className="flex justify-center items-center  w-full h-[3rem] bg-[var(--main-color)] rounded-3xl cursor-pointer text-white">
                    Done
                </button>
            </div>
        </div>
    );
}
