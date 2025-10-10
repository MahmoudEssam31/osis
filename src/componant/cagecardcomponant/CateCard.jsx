import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import CompoButton from '../pages/homePage/common/buttons/CompoButton';

export default function CateCard({ type, img }) {
  return (
      <div>
          <div className="categ-sitting overflow-hidden xl:max-h-[320px] lg:max-h-[280px] md:max-h-[230px] max-h-[180px]  bg-[var(--backgroud-color)] flex flex-row justify-center items-center">
              <div className="categ-sitting-text flex flex-col xl:gap-5 md:gap-5 gap-2 xl:mb-20  xl:ps-20.5 md:ps-10 ps-8 xl:w-[30%] lg:w-[40%] md:w-[50%] w-[100%]">
                  <h4 className="xl:text-[1.7rem] md:text-[1.2rem] text-[.7rem] font-bold ">{type}</h4>
                  <CompoButton/>
              </div>
              <div className="categ-sitting-img  ">
                  <img src={img} alt="" className="max-w-full h-auto object-contain xl:mb-19 md:mb-10 md:ms-[6rem] ms-[4rem]" />
              </div>
          </div>
      </div>
  );
}

{/* <NavLink
    to="/shop"
    className="  font-semibold rounded-3xl cursor-pointer text-[var(--dark-color)] sm:text-[.1rem] border-1 flex items-center justify-center xl:gap-[1rem] gap-[.rem]  xl:py-[.7rem]  lg:py-[.6rem] md:py-[.5rem] text-[.4rem] md:text-[.8rem] lg:text-[.9rem]  xl:text-[1rem] ">
    <span className=" ">Shop Now</span>
    <IoIosArrowRoundForward size={24} />
</NavLink> */}