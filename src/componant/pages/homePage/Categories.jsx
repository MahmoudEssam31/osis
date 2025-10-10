import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TopProductsData } from "../../../data/Data";
import CustomContainer from "../../ui/CustomContainer";
import TopProducts from "./TopProducts";

export default function Categories() {
    const category = TopProductsData[0].shoppingCcategory;
    const listItems = [
        {
            id: 1,
            name: "All",
        },
        {
            id: 2,
            name: "Sitting Room",
        },
        {
            id: 3,
            name: "Accessories",
        },
        {
            id: 4,
            name: "Kitchen",
        },
        {
            id: 5,
            name: "Bedroom",
        },
    ];
    const [allCategory, setAllCategory] = useState("All");
    const showAll = allCategory === "All" ? TopProductsData : TopProductsData.filter((item) => item.shoppingCcategory === allCategory);
    return (
        <CustomContainer>
            <div className="categories h-auto w-full mb-[5rem]">
                <div className="categories-header flex flex-col gap-[1rem] justify-center items-center">
                    <h1 className="text-[3rem] font-bold">Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id.</p>
                    <div className="categories-header-location flex gap-[1rem]">
                        <Link to={"/"}>Home</Link>
                        <span>/ </span>
                        <Link to={"/"}>Categories</Link>
                        <span>/</span>
                        <p>{allCategory}</p>
                        {/* <p className="text-[var(--main-color)]">{TopProductsData.shoppingCcategory}<p/> */}
                    </div>
                    <div className="catgories-container w-full">
                        <div className="catgories-List ">
                            <ul className="flex gap-[3rem] flex-row my-[2rem]">
                                {listItems.map((item) => (
                                    <li
                                        onClick={() => setAllCategory(item.name)}
                                        className={`flex justify-center items-center text-[1rem] font-bold w-[7em] h-[2.5em] rounded-2xl bg-[var(--backgroud-color)] cursor-pointer ${
                                            allCategory === item.name ? "flex justify-center items-center text-[1rem] font-bold w-[7em] h-[2.5em] rounded-2xl bg-[var(--main-color)] text-white" : ""
                                        }`}
                                        key={item.id}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="catgories-cards grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                            {showAll.map((item, index) => (
                                <TopProducts
                                    key={index}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}
                                    color1={item.color1}
                                    color2={item.color2}
                                    slug={item.slug}
                                    newPrice={item.newPrice}
                                    id={item.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </CustomContainer>
    );
}
