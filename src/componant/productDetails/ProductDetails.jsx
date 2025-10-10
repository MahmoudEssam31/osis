import React, { useState } from "react";
import CustomContainer from "../ui/CustomContainer";
import { CiShoppingBasket } from "react-icons/ci";
import { TopProductsData } from "../../data/Data";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { PiFlowerTulipThin } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import BuyPage from "../BuyPage";
import Checkout from "../Checkout";
import Payment from "../ui/Payment";
import SuccessPage from "../ui/SuccessPage";
import FavoritePage from "../store/FavoritePage";
import { useHandleFavList } from "../store/HandleFavList";
// import FavoriteCard from "../pages/homePage/common/favoriteCard/FavoriteCard";

export default function ProductDetails({}) {
    const { favList, addToFavList } = useHandleFavList();
    const { slug } = useParams();
    const findProduct = TopProductsData.find((item) => item.slug === slug);
    const [isOpen, setIsOpen] = React.useState(false);
    const [step, setStep] = React.useState(1);
    const colors = [findProduct?.colVisible1, findProduct?.colVisible2, findProduct?.colVisible3]?.filter(Boolean);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleAddToCart = () => {
        const existProduct = favList.some((item) => item.id === findProduct.id);
        if (!existProduct) {
            addToFavList(findProduct);
        }
        setStep(1);
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    // const handleBuyNow = () => {
    //     setStep(1);
    //     setIsOpen(true);
    // };
    const nextStep = () => {
        setStep((prev) => prev + 1);
    };
    const prevStep = () => {
        setStep((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <CustomContainer>
            <div className="productDetails flex xl:flex-row lg:flex-row md:flex-row flex-col mt-[2rem] max-w-[100%] xl:gap-[11rem] lg:gap-[8rem] md:gap-[3rem] gap-[5rem]  justify-center items-center">
                <div className="productDetails-img xl-w-[50%] lg:w-[50%] md:w-[100%] flex justify-center items-center gap-3 flex-col xl:mb-[3rem] lg:mb-[3rem] md:mb-[2rem] mb-[-3rem]">
                    <img src={findProduct.img} alt="" />
                </div>
                <div className="productDetails-details flex-col gap-2 xl:w-[50%] lg-w-[0%] md:w-[100%] max-w-[100%] flex justify-center xl:me-[4em]">
                    <h2 className="productDetails-title text-[1.5rem] font-semibold">{findProduct.title}</h2>
                    <div className="productDetails-review flex gap-4 ">
                        {new Array(5).fill(0).map((_, index) => (findProduct.rate > index ? <FaStar key={index} className="text-[orange]" /> : <FaRegStar />))}
                        <span className="text-[gray] text-[.8rem] font-semibold">{`${findProduct.rate} Stars`}</span>
                    </div>
                    <div className="productDetails-price flex gap-2 items-center ">
                        <span className="text-[var(--main-color)] text-[1.625rem] font-semibold">{`$${findProduct.newPrice ? findProduct.newPrice : findProduct.price}`}</span>
                        <span className="line-through text-[1rem] text-neutral-400">{findProduct.newPrice ? findProduct.price : ""}</span>
                        <span className="text-[red] text-[1rem] font-semibold bg-[#fddcdf] px-1 py-0.3 rounded-2xl">{findProduct.discount ? findProduct.discount : ""}</span>
                    </div>
                    <div className="productDetails-discription">
                        <p className="text-[1.25rem] text-[#5f6980]">{findProduct.description}</p>
                    </div>
                    {/* <div className="productDetails-color-num flex flex-row justify-between sm:items-center w-full">
                        <div className="colors flex gap-4 items-center">
                            <span className=" w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible1 }}></span>
                            <span className=" w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible2 }}></span>
                            <span className=" w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible3 }}></span>
                        </div>
                        <div className="number flex justify-center items-center">
                            <span className="bg-neutral-200  w-[2rem] h-[2rem] flex justify-center items-center rounded-[.65rem] border-1 text-center">1</span>
                        </div>
                    </div> */}
                    <div className="colors flex gap-3 items-center">
                        {colors.map((color, index) => {
                            const isActive = color === selectedColor;
                            return (
                                <button
                                    key={index}
                                    className={`w-[2rem] h-[2rem] rounded-[.65rem] border duration-200 hover:scale-105 ${
                                        isActive ? "border-2 border-[var(--main-color)] scale-110" : "border-gray-300"
                                    }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}></button>
                            );
                        })}
                    </div>

                    <button className="bg-[var(--main-color)] w-full h-[3rem] cursor-pointer rounded-2xl text-[var(--backgroud-color)] mt-4" onClick={handleAddToCart}>
                        Buy now
                    </button>
                    <div className="productDetails-instraction flex flex-col gap-2  xl:mb-[2rem] lg:mb-[2rem] md:mb-[2rem] mb-[2rem]">
                        <div className="instraction-free flex flex-row items-center gap-2">
                            <CiShoppingBasket size={22} />
                            <span className="text-[.9rem]">Free shipping included</span>
                        </div>
                        <div className="instraction-free flex flex-row items-center gap-2">
                            <PiFlowerTulipThin size={22} />
                            <span className="text-[.9rem]">Made from the best of materials sourced</span>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="steps z-50 fixed inset-0 rgba(0, 0, 0, 0.5) flex items-center justify-end  ">
                    <div className="overflow lg:block md:hidden hidden absolute inset-0 bg-black/50" onClick={handleClose}></div>
                    <div className="relative w-full md:w-[100%] lg:w-[600px] h-full bg-white flex flex-col shadow-xl">
                        <div className="steps-container flex justify-start items-center p-4 lg:gap-[15rem] md:gap-[20rem] gap-[9rem]">
                            <button className="cursor-pointer z-100 w-[2.5rem] h-[2.5rem] rounded-full bg-[var(--backgroud-color)] flex justify-center items-center" onClick={handleClose}>
                                <IoClose size={28} />
                            </button>
                            <h1 className="text-[1.5rem] font-bold flex justify-between items-center">
                                {step === 1 && "Cart"}
                                {step === 2 && "Checkout"}
                                {step === 3 && "Payment"}
                                {step === 4 && ""}
                            </h1>
                        </div>
                        <div className="flex-1">
                            {step === 1 && <FavoritePage onNext={nextStep} onClose={handleClose} />}
                            {step === 2 && <Checkout step={step} onNext={nextStep} onBack={prevStep} />}
                            {step === 3 && <Payment onNext={nextStep} onBack={prevStep} />}
                            {step === 4 && <SuccessPage onClose={handleClose} onBack={prevStep} />}
                        </div>
                    </div>
                </div>
            )}
        </CustomContainer>
    );
}
