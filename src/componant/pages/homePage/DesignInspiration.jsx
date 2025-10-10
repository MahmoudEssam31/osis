import React from "react";
import CustomContainer from "../../ui/CustomContainer";

export default function DesignInspiration({ img }) {
    return (
        <div className="break-inside-avoid">
            <div className="designInspiration-cards-img ">
                <img src={img} alt="" className="w-[100%] h-[100%] object-contain" />
            </div>
        </div>
    );
}
