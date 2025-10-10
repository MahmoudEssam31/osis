import clsx from "clsx";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomContainer from "../../ui/CustomContainer";
import { NavLink } from "react-router-dom";
import CateCard from "../../cagecardcomponant/CateCard";
import { CategoriesHome } from "../../../data/Data";
import CompoButton from "./common/buttons/CompoButton";

export default function CategSecHomePage({customClass}) {
    const selectedIdSitting = 1;
    const selectedItem = CategoriesHome.find((item) => item.id === selectedIdSitting);
    // const selectedIdAccessories = 2;
    // const selectedItemAccessories = CategoriesHome.find((item) => item.id === selectedIdAccessories);
    // const selectIdKitchen = 3;
    // const selectedItemKitchen = CategoriesHome.find((item) => item.id === selectIdKitchen);
    const selectIdBedroom = 4;
    const selectItemBedroom = CategoriesHome.find((item) => item.id === selectIdBedroom);
    return (
        <CustomContainer>
            <section className={clsx("categ-home flex flex-col")}>
                <h2 className="font-medium xl:text-[1.7rem] mt-[3rem] mb-[.5rem]">Categories</h2>
                {/* categ-home-siting */}
                <div className="categ-home-siting">{selectedItem && <CateCard key={selectedItem.id} type={selectedItem.type} img={selectedItem.img} />}</div>
                {/* categ-home-Accessories&&Kitchen */}
                <div className="categ-home-AccesKit ">
                    <div className="categ-home-AccesKit-container w-full flex justify-center xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center gap-5  mt-5 mb-5 ">
                        <div className="categ-Accessories overflow-hidden sm:max-w-[50%]  xl:max-h-[280px] lg:max-h-[280px] md:max-h-[230px] max-h-[180px] bg-[var(--backgroud-color)] flex xl:ps-16 lg:ps-14 md:ps-0 ps-10 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-18 xl:flex-row lg:flex-row md:flex-col justify-center items-center">
                            <div className="categ-Accessories-text flex flex-col xl:w-[50%] md:w-[45%] w-[30%]  gap-5 md:gap-3 xl:pt-20 lg:pt-20 pt-1 md:order-2  xl:order-1 lg:order-1">
                                <h4 className=" xl:text-[1.7rem] md:text-[1.2rem] text-[.7rem] font-bold ">Accessories</h4>
                                <CompoButton />
                            </div>
                            <div className="categ-Accessories-img w-[50%] xl:w-[50%] lg:w-[50%] md:w-[42%] max-md-h-[338px] h-[338px] md:order-1 order-2 ">
                                <img src="./src/assets/categHomeImg/Nightstand -10 1.png" alt="" className="w-[100%] h-[100%] object-contain" />
                            </div>
                        </div>
                        <div className="categ-Accessories overflow-hidden sm:w-[50%] xl:max-h-[280px] lg:max-h-[280px] md:max-h-[230px] max-h-[180px] bg-[var(--backgroud-color)] flex xl:ps-16 lg:ps-14 md:ps-0 ps-10 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-18 xl:flex-row lg:flex-row md:flex-col justify-center items-center">
                            <div className="categ-Accessories-text flex flex-col xl:w-[50%] md:w-[45%] w-[30%]  gap-5 md:gap-3 xl:pt-20 lg:pt-20 pt-1 md:order-2 xl:order-1 lg:order-1">
                                <h4 className=" xl:text-[1.7rem] md:text-[1.2rem] text-[.7rem] font-bold ">Kitchen</h4>
                                <CompoButton />
                            </div>
                            <div className="categ-Accessories-img w-[50%] xl:w-[50%] lg:w-[50%] md:w-[42%] max-md-h-[338px] h-[338px] md:order-1 order-2 ">
                                <img src="./src/assets/categHomeImg/Nightstand -10 1 (1).png" alt="" className="w-[100%] h-[100%] object-contain " />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bedroom */}
                <div className="categ-bedroom overflow-hidden xl:max-h-[320px] lg:max-h-[280px] md:max-h-[230px] max-h-[180px]  bg-[var(--backgroud-color)] flex flex-row justify-between items-center ">
                    <div className="categ-sitting-text flex  flex-col xl:gap-5 md:gap-5 gap-2 xl:mb-0  xl:ps-14 md:ps-14 ps-8 xl:w-[30%] lg:w-[30%] md:w-[50%] w-[50%]">
                        <h4 className="xl:text-[1.7rem] md:text-[1.2rem] text-[.7rem] font-bold ">Bedroom</h4>
                        <CompoButton />
                    </div>
                    <div className="categ-bedroom-img w-[60%] xl:w-[30%] lg:w-[30%] md:w-[42%] max-md-h-[338px] h-[338px] xl:mb-10 xl:me-[12rem] lg:me-[12rem] md:me-[10rem] sm:me-[7rem] me-[5rem]">
                        <img
                            src="./src/assets/categHomeImg/Nightstand -10 1 (2).png "
                            alt=""
                            className="max-w-full h-full object-contain xl:mb-22 lg:mt-10 md:mt-3    md:mb-10 md:ms-[8rem] mt-2  ms-[4rem]"
                        />
                    </div>
                </div>

                {/* <CateCard type={data.type} img={data.img} /> */}
                {/* {CategoriesHome.map((data,index)=>(
                
                ))} */}
            </section>
        </CustomContainer>
    );
}
