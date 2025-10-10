import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function CompoButton() {
  return (
      <div>
          <NavLink
              to="/categories"
              className="font-semibold rounded-3xl cursor-pointer text-[var(--dark-color)] sm:text-[.1rem] border-1 flex items-center justify-center xl:gap-[.1rem]  xl:py-[.7rem]  lg:py-[.6rem] md:py-[.5rem] text-[.4rem] md:text-[.8rem] lg:text-[.9rem]  xl:text-[1rem] max-w-[100%] md:max-w-[90%] lg:max-w-[70%] xl:max-w-[63%]  md:mb-4 hover:bg-[var(--dark-color)] hover:text-[var(--backgroud-color)] duration-500 ">
              <span className=" ">Shop Now</span>
              <IoIosArrowRoundForward size={24} />
          </NavLink>
      </div>
  );
}
