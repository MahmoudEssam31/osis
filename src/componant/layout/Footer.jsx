import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import CustomContainer from "../ui/CustomContainer";
import clsx from "clsx";

export default function Footer({ castomClass }) {
    return (
        <div className="footer bg-gray-950 text-[var(--backgroud-color)] w-full h-auto">
            <CustomContainer>
                <div className="footerLogo pt-10 ">
                    <Logo />
                </div>
                <div className="footer-container grid  grid-cols-1 lg:grid-cols-4 gap-8 mt-20 ">
                    <div className="footer-container-links flex flex-wrap items-end gap-[10px] w-60">
                        <NavLink to="/" className="text-[.87rem] ">Home</NavLink>
                        <span className=" text-gray-400">/</span>
                        <NavLink to="/blog" className="text-[.87rem]">
                            Blog
                        </NavLink>
                        <span className=" text-gray-400 ">/</span>
                        <NavLink to="/shop" className="text-[.87rem]">
                            Sale
                        </NavLink>
                        <span className=" text-gray-400 ">/</span>
                        <NavLink to="/About" className="text-[.87rem]">
                            About us
                        </NavLink>
                    </div>
                    <div className="footer-container-contact flex flex-col gap-[20px]">
                        <div className="footer-container-contactUs">
                            <span className="text-gray-400">Contact Us</span>
                            <h4 className="text-[1.25rem]"> +1 999 888-76-54</h4>
                        </div>
                        <div className="footer-container-email">
                            <span className="text-gray-400">Email</span>
                            <h4 className="text-[1.25rem]">hello@logoipsum.com</h4>
                        </div>
                    </div>
                    <div className="footer-container-address flex flex-col gap-[14px]">
                        <div className="footer-container-address">
                            <span className="text-gray-400">ADDRESS</span>
                            <h4 className="text-[.95rem]">2118 Thornridge Cir. Syracuse, Connecticut 35624</h4>
                        </div>
                        <div className="footer-container-opening">
                            <span className="capitalize text-gray-400">Opening hours</span>
                            <h4 className="text-[1.25rem]">9am—6pm</h4>
                        </div>
                    </div>
                    <div className="footer-container-copyright flex items-end">
                        <span className=" text-gray-400 text-[.75rem] inline-block">© 2023 — Copyright</span>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}
