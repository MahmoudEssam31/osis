import React, { useState } from "react";
import CustomContainer from "../../ui/CustomContainer";
import { CategoriesHome, TopProductsData } from "../../../data/Data";
import { IoIosArrowRoundForward, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useHandleFavList } from "../../store/HandleFavList";
import { useContext } from "react";
import { CounterContext } from "../../../Hooks/CounterContext";

export default function TopProducts({ title, img, price, color1, color2, slug, newPrice, id, description, colVisible1, colVisible2, colVisible3 }) {
    // const [addToCart, setAddToCart] = React.useState(true);
    const { addToFavList, inFavList } = useHandleFavList();
    const product = { id, title, img, price, color1, color2, slug, newPrice, description, colVisible1, colVisible2, colVisible3 };
    const { cartItems, setCartItems } = useContext(CounterContext);
    const colors = [colVisible1, colVisible2, colVisible3]?.filter(Boolean);
const [selectedColor, setSelectedColor] = useState(colors[0] || null);
    return (
        <div className="topProducts">
            <div className="topProductsCards flex flex-col justify-start  md:items-center gap-2 xl:w-[250px] lg:w-[275px] md:w-[270px] w-[290px] max-h-[383px] group duration-500  mt-[.5em]">
                <div
                    className="topProductsCards-img xl:w-[240px] lg:w-[280px]
            md:w-[270px] w-[290px] relative h-[250px] overflow-hidden rounded-2xl bg-[var(--backgroud-color)] flex justify-center items-center">
                    <img src={img} loading="lazy" alt="" className="w-full h-full object-contain relative group" />
                    <span
                        className="absolute cursor-pointer z-10 top-2 right-[40rem] group-hover:right-3 duration-500"
                        onClick={() => {
                            addToFavList(product);
                            if (inFavList(id)) {
                                setCartItems((cartItems) => cartItems + 1);
                            } else {
                                setCartItems((cartItems) => cartItems - 1);
                            }
                        }}>
                        {inFavList(id) ? <IoMdHeart className="text-[var(--main-color)]" size={24} /> : <IoIosHeartEmpty size={24} />}
                    </span>

                    <div className="topProductsCardsf absolute top-0 right-[20rem]  bg-[rgba(0,0,0,.1)] w-full h-full group-hover:right-0 duration-500"></div>
                    <NavLink
                        to={`/product/${slug}`}
                        className="absolute duration-500 right-200 bottom-4 flex h-12 w-38 rounded-3xl cursor-pointer bg-[#7C71DF] text-amber-50 items-center justify-center gap-[2px] xl:group-hover:right-18 md:group-hover:right-22 group-hover:right-26  hover:bg-[var(--dark-color)] hover:text-[var(--backgroud-color)]">
                        <span>Get Started </span>
                        <IoIosArrowRoundForward size={24} />
                    </NavLink>
                </div>
                <div className="topProductsCards-title flex flex-row items-center justify-between gap-2.5 w-full">
                    <h4 className="text-[1.125rem] font-semibold max-w-[70%] ">{title?.length > 15 ? `${title.slice(0, 15)}...` : title}</h4>
                    <span className="text-[1.125rem] font-semibold px-[.7rem] py-[.2rem] rounded-2xl bg-[var(--backgroud-color)]">{`$${newPrice ? newPrice : price}`}</span>
                </div>
                <div className="colors flex gap-2 justify-center items-center ">
                    {colors.map((color, index) => {
                        const isActive = color === selectedColor;
                        return (
                            <button
                                key={index}
                                className={`w-[1rem] cursor-pointer h-[1rem] relative xl:right-22
                                    right-26 rounded-[2rem] border duration-200 hover:scale-105 gap-2 ${isActive ? "border-2 border-[var(--main-color)] scale-110" : "border-gray-300"}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}></button>
                        );
                    })}
                </div>
                {/* <div className="topProductsCards-color flex flex-row items-center justify-center pe-[80%] gap-2">
                    <button className="bg-[var(--dark-color)] w-[1rem] h-[1rem] rounded-2xl block border-2 border-b-neutral-600" style={{ backgroundColor: color1 }}></button>
                    <button className="bg-[var(--dark-color)] w-[1rem] h-[1rem] rounded-2xl block" style={{ backgroundColor: color2 }}></button>
                </div> */}
            </div>
        </div>
    );
}
