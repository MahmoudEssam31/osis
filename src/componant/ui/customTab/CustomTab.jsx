import clsx from "clsx";
import React from "react";
// import { categoryTab } from "../../design/ContainerDesign";

export default function CustomTab({ data = [], setActiveTab, activeTab }) {
    return (
        <div className="customTab flex justify-center items-center xl:gap-3 lg:gap-3 md:gap-3 gap-1 mt-[1em] overflow-x-auto whitespace-nowrap">
            {data.map((item, index) => (
                <span
                    className={clsx(
                        "designInspiration-buttons-all xl:py-[.7em] xl:px-[1.3em] md:py-[.6em] md:px-[1.2em] py-[.6em] px-[1.2em]  rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] xl:text-[1rem] lg:text-[.9rem] md:text-[.8rem] text-[.5rem] cursor-pointer font-semibold duration-300 ",
                        {
                            "bg-black text-white": activeTab == item.value,
                        }, 
                    )}
                    onClick={() => setActiveTab(item.value)}
                    key={index}>
                    {item.label}
                </span>
            ))}
        </div>
    );
}
