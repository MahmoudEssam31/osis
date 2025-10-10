import React, { useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomContainer from "../ui/CustomContainer";
import BlogCard from "../blogCard/BlogCard";
import { BlogData } from "../../data/Data";

export default function Blog() {
    const [showAll, setShowAll] = useState(false);
    const displayItems = showAll ? BlogData : BlogData.slice(0, 6);
    const header = useRef(null);
    
    return (
        <CustomContainer>
            {/* <BlogCard img={item.img} title={item.title} description={item.description} /> */}
            <div className="blog-header flex flex-col gap-[1rem] mt-[3rem]">
                <h2 className="text-[39px] font-bold leading-[3rem]">Transforming Your Living Space: Top Trends in Modern Furniture</h2>
                <p className="text-[1.1em] xl:max-w-[100%] max-w-[80%] ">Explore the latest trends in modern furniture design that can elevate your living space with style and functionality</p>
                <div
                    className="nav-getStart-icon h-12 w-40 rounded-3xl cursor-pointer bg-[#f8f7fb] text-black flex items-center justify-center gap-[12px] font-semibold"
                    onClick={() => header.current.scrollIntoView({ behavior: "smooth" })}>
                    <span className="cursor-pointer"> Read Article </span>
                    <IoIosArrowRoundForward size={24} />
                </div>
                <div className="blog-header-img">
                    <img src="public/blogBannerImg/Picture.png" alt="" />
                </div>
            </div>
            <div className="blog-container flex flex-col">
                <h1 className="text-[39px] font-bold my-[2rem]" ref={header}>
                    Latest Articles
                </h1>
                <div className="blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[3rem] ">
                    {displayItems.map((item, id) => (
                        <BlogCard key={id} id={id} img={item.img} title={item.title} description={item.description} design={item.design} />
                    ))}
                </div>
                <span
                    className="seeMore  text-[1.1em] cursor-pointer mx-auto border-1 h-[3rem] flex items-center justify-center rounded-3xl px-[1rem] py-[.9rem] align-center mb-[2rem]"
                    onClick={() => setShowAll(!showAll)}>
                    {displayItems.length < BlogData.length ? "Show all articles" : "Show less"}
                </span>
            </div>
        </CustomContainer>
    );
}
