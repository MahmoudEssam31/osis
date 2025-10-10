import React from "react";
import CustomContainer from "../../ui/CustomContainer";
import { TopProductsData } from "../../../data/Data";
import { IoArrowRedo } from "react-icons/io5";

export default function AboutSection() {
    const picData = TopProductsData;
    return (
        <CustomContainer>
            <div className="about-us flex justify-center items-center flex-col gap-3">
                <h2 className="text-[3rem] ">About Us</h2>
                <p>
                    About us – Furniture ideal website is the first online furniture store in Egypt start in 2010 to lead the the online market of furniture in Egypt our Experience of furniture
                    manufacturing in Egypt, 85% of our furniture is custom made for exporting to Dubai, Qatar, KSA and Bahrain. Our mission at furniture ideal Company is to provide quality home
                    furnishings and accessories. We are committed to maintain a wide variety of quality furniture displayed in a clean and friendly environment to be sold at retail with fair and
                    reasonable prices. Our knowledgeable sales staff welcomes you to our factory and stands ready to assists with any purchasing or decorating decisions. We promise to deliver and set
                    up your purchase in timely manner. At furniture ideal, we understand the importance of customer service and guarantee satisfaction on all products sold.
                </p>
                <span className="text-[2.5rem] font-bold leading-[2.7rem]">You can check some of deliverable and manufacturing process thru this link.</span>
                <ul className="more text-[1rem] mt-[2rem]">
                    <li>Check one of our models and get your quote and prices online from us or START CUSTOMIZE NOW</li>
                    <li> sales@furniture-ideal.com</li>
                    <li>Call/WhatsApp: +201009464679</li>
                    <li>Furniture-Ideal.com is more than just an online furniture store. We hand pick and curate the best in quality and style</li>
                    <li>
                        {" "}
                        for you and your home. Shop our extensive selection of quality furniture and home décor for every room, plus a vast assortment of mattresses, appliances and electronics at
                        prices that can’t be beat! Find everything you’re looking for from the comfort of your home.
                    </li>
                </ul>
                <h3 className="text-[3.5rem] font-bold leading-[4rem] mt-[2rem]">Some of our previous projects Here </h3>
                <span className="text-[var(--main-color)] cursor-pointer">
                    {" "}
                    <IoArrowRedo className="rotate-90 text-[3.5rem]" />
                </span>
                <div className="gallery flex flex-col lg:w-[800px] mt-[-15rem]">
                    {picData.map((item) => (
                        <img className="py-[.5rem]" src={item.shoppingCcategory === "Bedroom" ? item.img : ""} alt="" />
                    ))}
                </div>
            </div>
        </CustomContainer>
    );
}
