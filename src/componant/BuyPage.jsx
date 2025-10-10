import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useHandleFavList } from "./store/HandleFavList";
import { TopProductsData } from "../data/Data";
import { useParams } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
// import ProductDetails from "./productDetails/ProductDetails";

export default function BuyPage({ img, title, price, id, newPrice}) {
    const { favList, addToFavList, removeItem, inFavList, updateQuantity } = useHandleFavList();
    const { slug } = useParams();
    const findProduct = TopProductsData.find((item) => item.slug === slug);
    const colors = [findProduct?.colVisible1, findProduct?.colVisible2, findProduct?.colVisible3]?.filter(Boolean);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = React.useState(1);
    const handleIncrease = () => {
        const newQ = quantity + 1;
        setQuantity(newQ);
        updateQuantity(id, newQ);
    };

    const handleDecrease = () => {
        const newQ = quantity > 1 ? quantity - 1 : 1;
        setQuantity(newQ);
        updateQuantity(id, newQ);
    };
   
    return (
        <div className="buy-page relative flex flex-col justify-between">
            <div className="buy-page-content-body items-center flex lg:ms-[4rem] md:ms-[6rem] ms-[1rem] relative  gap-[2rem] lg:max-w-[80%] max-w-[100%] ">
                <div className={`buy-page-content-body-img flex md:w-[45%] w-[40%] h-[80%] justify-center items-center gap-3 flex-col overflow-y-hidden`}>
                    <img src={img} alt="" className="max-w-[100%] max-h-[100%] object-cover" />
                </div>
                <div className="buy-page-content-body-details productDetails-details flex-col xl:gap-[.8rem] lg:gap-[.01rem] md:gap-[2.2rem] gap-[.8rem]  flex justify-center w-[50%]">
                    <div className="header flex flex-row items justify-between gap-[2rem]">
                        <h2 className="productDetails-title text-[1rem] font-semibold">{title}</h2>
                        <span
                            onClick={() => removeItem(id)}
                            className="cursor-pointer w-[1rem] h-[1rem] bg-[var(--backgroud-color)] flex justify-center items-center rounded-2xl">
                            <IoIosClose size={20} />
                        </span>
                    </div>
                    <div className="productDetails-discription">
                        <p className="text-[.8rem] text-[#5f6980]">{findProduct?.description}</p>
                    </div>
                    <div className="productDetails-price flex gap-2 items-center ">
                        <span className="text-[var(--main-color)] text-[1.25rem] font-semibold">{`$${newPrice ? newPrice * quantity : price * quantity}`}</span>
                        <span className="text-[var(--main-color)] text-[1.2rem] font-semibold">{}</span>
                    </div>
                    <div className="productDetails-color-num flex flex-row justify-between sm:items-center gap-[3rem] w-full">
                        {/* <div className="colors flex gap-3 items-center">
                            {findProduct?.colVisible1 && <span className="w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible1 }}></span>}
                            {findProduct?.colVisible2 && <span className="w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible2 }}></span>}
                            {findProduct?.colVisible3 && <span className="w-[2rem] h-[2rem] inline-block rounded-[.65rem]" style={{ backgroundColor: findProduct.colVisible3 }}></span>}
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

                        <div className="number flex gap-3 justify-center items-center me-[2rem]">
                            <span onClick={handleDecrease} className="cursor-pointer">
                                -
                            </span>

                            <span className="bg-neutral-200 w-[2rem] h-[2rem] flex justify-center items-center rounded-[.65rem] border-[1px] text-center">{quantity}</span>
                            <span onClick={handleIncrease} className="cursor-pointer">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
