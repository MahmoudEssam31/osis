import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function MostRecentButton({ mostRecent, setMostRecent }) {
    // const ss = seleeect
    // const [mostRecent, SetMostRecent] = useState(true);
    const handleChange = (e) => {
        if (e.target.value === "most") {
            setMostRecent(true);
        } else {
            setMostRecent(false);
        }
    };
    return (
        <div>
            <div className="most-recent-button flex justify-center items-center rounded-2xl border-1 w-[10em] h-[3rem] cursor-pointer mt-8 ">
                {/* <span className='text-[1rem]'>Most Recent</span> */}
                <select
                    value={mostRecent ? "most" : "all"}
                    onChange={handleChange}
                    name=""
                    id=""
                    className="text-[1.1rem] font-bold flex justify-center items-center rounded-2xl border-2 w-[10em] h-[3rem] px-[.5rem]">
                    {mostRecent ? "Most Recent" : "All Product"}
                    <option className="text-[1rem]" value="most">
                        Most Recent
                    </option>
                    <option className="" value="all">
                        All Product
                    </option>
                </select>
                {/* <MdOutlineKeyboardArrowDown size={24} /> */}
            </div>
        </div>
    );
}
