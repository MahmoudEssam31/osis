import React, { useState } from "react";
import CustomContainer from "../../ui/CustomContainer";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import SignIn from "../../signIn/SignIn";

export default function Faq({ id, questionNum, question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    
    return (
        <CustomContainer>
            <div>
                <div className="faq-question-container  flex flex-row xl:gap-[1rem] lg:gap-[1rem] md:gap-[.8rem]  gap-[.8rem] py-[1.4rem]  items-start justify-between ">
                    <div className="faq-question-text flex xl:gap-[5rem] lg:gap-[5rem] md:gap-[4rem]  gap-[2rem]">
                        <span>{questionNum}</span>
                        <div className="faq-question flex flex-col gap-[1rem] duration-300 ">
                            <h2>{question}</h2>
                            <p className={`overflow-hidden transition-all duration-300 ease-in-out text-[gray] ${showAnswer ? "max-h-40 opacity-100" : "max-h-5 opacity-0"} `}>{answer}</p>
                        </div>
                    </div>
                    <div className="faq-question-button flex justify-center items-center bg-[var(--backgroud-color)] p-2 rounded-2xl">
                        <button className="cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
                            {showAnswer ? <IoIosArrowRoundDown size={24} /> : <IoIosArrowRoundUp size={24} />}
                        </button>
                    </div>
                </div>
                <hr className="" />
            </div>
        </CustomContainer>
    );
}
