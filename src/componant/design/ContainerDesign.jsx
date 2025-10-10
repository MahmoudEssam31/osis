import React, { use, useEffect, useState } from "react";
import DesignInspiration from "../pages/homePage/DesignInspiration";
import { DesignInspirationData } from "../../data/Data";
import Masonry from "react-masonry-css";
import CustomContainer from "../ui/CustomContainer";
import CustomTab from "../ui/customTab/CustomTab";
import { data } from "react-router-dom";

export default function ContainerDesign() {
    // const CustomTabsData = [
    //     {
    //         label: "All",
    //         value: "all",
    //     },
    //     {
    //         label: "Bedroom",
    //         value: "bedroom",
    //     },
    //     {
    //         label: "Living room",
    //         value: "living room",
    //     },
    //     {
    //         label: "Kitchen",
    //         value: "kitchen",
    //     },
    //     {
    //         label: "Workspace",
    //         value: "workspace",
    //     },
    //     {
    //         label: "Outdoor",
    //         value: "outdoor",
    //     },
    //     {
    //         label: "Home office",
    //         value: "home office",
    //     },
    //     {
    //         label: "Dining room",
    //         value: "dining room",
    //     },
    // ];
    const [activeTab, setActiveTab] = useState("All");
    const [filterDesignInspiration, setFilterDesignInspiration] = useState([]);
    const [myDesignInspiration, setMyDesignInspiration] = useState([]);
    useEffect(() => {
        if (activeTab == "All") {
            setFilterDesignInspiration(DesignInspirationData);
        } else {
            const filterDesign = DesignInspirationData.filter((item) => item.category == activeTab);
            setFilterDesignInspiration(filterDesign);
        }
    }, [activeTab]);

    useEffect(() => {
        const uniqueDesignInspiration = ["All", ...new Set(DesignInspirationData.map(item=> item.category))];
        const convertToLabelAndValue = uniqueDesignInspiration.map(item => ({
            label: item,
            value: item
        }))

        setMyDesignInspiration(convertToLabelAndValue);
    },[])
    // const [activeTab, setActiveTab] = useState("all");
    // const [filterDesignInspiration, SetfilterDesignInspiration] = useState([]);
    // const [myDesignInspiration, SetMyDesignInspiration] = useState([]);
    // useEffect(() => {
    //     if (activeTab) {
    //         SetfilterDesignInspiration(DesignInspirationData);
    //     } else {
    //         const filterdesign = DesignInspirationData.filter((item) => item.category == activeTab);
    //         SetfilterDesignInspiration(filterdesign);
    //     }
    // },[activeTab]);
    // useEffect(() => {
    //     const uniqueDesignInspiration = ["All", ...new Set(DesignInspirationData.map(item => item.category))];
    //     const convertToLabelAndValue = uniqueDesignInspiration.map(item => ({
    //         label: item,
    //         value: item
    //     }))
    //     SetMyDesignInspiration(convertToLabelAndValue)
    // },[])

    return (
        <CustomContainer>
            <div className="designInspiration mt-[8em] mb-[6em] flex justify-center items-start gap-3 flex-col overflow-x-hidden ">
                <h2 className="text-[1.7rem] font-bold">Design Inspiration and Modern Home Ideas</h2>
                {/* <div className="designInspiration-buttons flex justify-center items-center overflow-x-hidden scroll gap-3 mt-[1em]">
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] xl:text-[1rem] cursor-pointer font-semibold">
                        All
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Bedroom
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Living room
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Kitchen
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Workspace
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Outdoor
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Home office
                    </span>
                    <span className="designInspiration-buttons-all py-[.7em] px-[1.3em] rounded-2xl bg-[var(--backgroud-color)] text-[var(--dark-color)] text-[1rem] cursor-pointer font-semibold">
                        Dining room
                    </span>
                </div> */}
                <div className="designInspiration-buttons-all  overflow-x-auto whitespace-nowrap gap-3 mt-[1em] px-2 scrollbar-hide  ">
                    <CustomTab data={myDesignInspiration} setActiveTab={setActiveTab} activeTab={activeTab} />
                </div>
                <div className="designInspiration-cards mt-[1.5em] ">
                    <Masonry
                        breakpointCols={
                            filterDesignInspiration.length === 1
                                ? 1
                                : filterDesignInspiration.length === 2
                                ? 2
                                : {
                                      default: 3,
                                      1024: 2,
                                      400: 2,
                                      0: 1,
                                  }
                        }
                        className="flex -ml-4 w-auto"
                        columnClassName="pl-4 flex flex-col">
                        {filterDesignInspiration.map((item, index) => (
                            <div key={index} className="mb-4">
                                <DesignInspiration img={item.img} />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </CustomContainer>
    );
}
