import React, { useContext } from "react";
import Logo from "./Logo";
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomContainer from "../ui/CustomContainer";
import { NavLink, useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CounterContext } from "../../Hooks/CounterContext";
import FavoritePage from "../store/FavoritePage";
import Checkout from "../Checkout";
import Payment from "../ui/Payment";
import SuccessPage from "../ui/SuccessPage";
import { TopProductsData } from "../../data/Data";
import CreateAccount from "../signIn/CreateAccount";
import SignIn from "../signIn/SignIn";
import ForgetPassword from "../signIn/ForgetPassword";
import { useHandleFavList } from "../store/HandleFavList";
// import { TopProductsData } from "../../data/Data";

export default function Navbar() {
    const { slug } = useParams();
    const findProduct = TopProductsData.find((item) => item.slug === slug);
    const [isOpen, setIsOpen] = React.useState(false);
    const { cartItems } = useContext(CounterContext);
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = React.useState(1);
    const [open2, setIsOpen2] = React.useState(false);
    const [authStep, setAuthStep] = React.useState("login");
    const handleToLogin = () => setAuthStep("login");
    const handleForgetPassword = () => setAuthStep("forgetPassword");
    const handleCreateAccount = () => setAuthStep("createAccount");
    const handleResetPassword = () => setAuthStep("resetPassword");
    const { favList } = useHandleFavList();

    
    const openLogin = () => {
        setAuthStep("login");
        setIsOpen2(true);
    };
    const handleCloseLogin = () => {
        setIsOpen2(false);
    };

    //    const handleSighnIn = () => {
    //        setAuth(1);
    //        setIsOpen2(true);
    //    }
    // const handleAddToCart = () => {
    //     const existProduct = favList.some((item) => item.id === findProduct.id);
    //     if (!existProduct) {
    //         addToFavList(findProduct);
    //     }
    //     setStep(1);
    //     setIsOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    const handleBuyNow = () => {
        setStep(1);
        setOpen(true);
    };
    const nextStep = () => {
        setStep((prev) => prev + 1);
    };
    const prevStep = () => {
        setStep((prev) => (prev > 1 ? prev - 1 : prev));
    };
         
    
    return (
        <CustomContainer className="relative">
            <div className="navbar flex items-center justify-between w-full mb-[6rem] z-50 px-[20px] py-[20px] duration-500">
                <Logo />
                <span
                    className={`menu-icon cursor-pointer z-70 lg:hidden ${
                        isOpen ? "fixed md:right-19 right-12 top-4" : "abosolute md:right-10 md:top-0 right-6"
                    } flex justify-between items-center pt-6 lg:hidden`}
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose size={28} /> : <CiMenuBurger className="" size={26} />}
                </span>
                <div
                    className={`nav-menu fixed inset-0 bg-[var(--backgroud-color)] z-50 flex flex-col justify-center items-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                    lg:static lg:flex lg:opacity-100 lg:visible lg:bg-transparent lg:flex-row lg:items-center lg:justify-between lg:gap-[11rem] `}>
                    <div className="mt-10 mb-8 ms-[rem] gap-10 lg:hidden">
                        <Logo className="lg:hidden" />
                    </div>
                    <ul className={`nav-links flex flex-col xl:gap-[40px] lg:gap-[20px] items-center justify-center lg:flex lg:flex-row gap-[20px] text-[16px] font-semibold`}>
                        <NavLink to="" className="">
                            Home
                        </NavLink>
                        <NavLink to="/categories">Categories</NavLink>
                        <NavLink to="/about-us">About Us</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </ul>
                    {/* </div> */}
                    <div className={`nav-getStart flex lg:flex-row flex-row lg:mt-[0rem] mt-[2rem] items-center gap-[12px]`}>
                        <div onClick={handleBuyNow} className={`nav-getStart-icon relative flex cursor-pointer items-center justify-center rounded-2xl w-14 h-10 bg-[#f8f7fb]`}>
                            <CiShoppingCart size={34} />
                            <span className="flex items-center justify-center text-[10px] h-[15px] w-[15px] rounded-full bg-[#f65061] text-amber-50 absolute right-[1px] top-[-2px]">
                                {favList.length ?? 0}
                            </span>
                        </div>
                        <div className={`nav-getStart-icon h-12 w-40 rounded-3xl cursor-pointer bg-[#7C71DF] text-amber-50 flex items-center justify-center gap-[12px]`} onClick={openLogin}>
                            <span>Get Started</span>
                            <IoIosArrowRoundForward size={24} />
                        </div>
                    </div>
                </div>
            </div>
             {open && (
                            <div className="steps z-50 fixed inset-0 rgba(0, 0, 0, 0.5) flex items-center justify-end  ">
                                <div className="overflow lg:block md:hidden hidden absolute inset-0 bg-black/50" onClick={handleClose}></div>
                                <div className="relative w-full md:w-[100%] lg:w-[600px] h-full bg-white flex flex-col shadow-xl">
                                    <div className="steps-container flex justify-start items-center p-4 lg:gap-[15rem] md:gap-[20rem] gap-[9rem]">
                                        <button className="cursor-pointer z-100 w-[2.5rem] h-[2.5rem] rounded-full bg-[var(--backgroud-color)] flex justify-center items-center" onClick={handleClose}>
                                            <IoClose size={28} />
                                        </button>
                                        <h1 className="text-[1.5rem] font-bold flex justify-between items-center">
                                            {step === 1 && "Cart"}
                                            {step === 2 && "Checkout"}
                                            {step === 3 && "Payment"}
                                            {step === 4 && ""}
                                        </h1>
                                    </div>
                                    <div className="flex-1">
                                        {step === 1 && <FavoritePage onNext={nextStep} onClose={handleClose} />}
                                        {step === 2 && <Checkout step={step} onNext={nextStep} onBack={prevStep} />}
                                        {step === 3 && <Payment onNext={nextStep} onBack={prevStep} />}
                                        {step === 4 && <SuccessPage onClose={handleClose} onBack={prevStep} />}
                                    </div>
                                </div>
                            </div>
                            
                        )}
            {/* {open && (
                <div className="steps fixed inset-0 bg-black/50 flex items-center justify-end z-50">
                    <div className="overflow lg:block md:hidden hidden absolute inset-0 bg-black/50" onClick={handleClose}></div>
                    <div className="relative w-full md:w-[100%] lg:w-[600px] h-full bg-white flex flex-col shadow-xl">
                        <div className="steps-container flex justify- items-center p-4 lg:gap-[15rem] md:gap-[20rem] gap-[9rem]">
                            <button className="cursor-pointer z-100 w-[2.5rem] h-[2.5rem] rounded-full bg-[var(--backgroud-color)] flex justify-center items-center" onClick={handleClose}>
                                <IoClose size={28} />
                            </button>
                            <h1 className="text-[1.5rem] font-bold flex justify-between items-center">
                                {step === 1 && "Cart"}
                                {step === 2 && "Checkout"}
                                {step === 3 && "Payment"}
                                {step === 4 && ""}
                            </h1>
                        </div>
                        <div className="flex-1">
                            {step === 1 && <FavoritePage onNext={nextStep} onClose={handleClose} />}
                            {step === 2 && <Checkout onNext={nextStep} onBack={prevStep} />}
                            {step === 3 && <Payment onNext={nextStep} onBack={prevStep} />}
                            {step === 4 && <SuccessPage onClose={handleClose} onBack={prevStep} />}
                        </div>
                    </div>
                </div>
                // <FavoriteCard />
            )} */}
            {open2 && (
                <div className="signIn-Container fixed inset-0 bg-black/50 flex items-center justify-end z-50">
                    <div className="overflow absolute inset-0 bg-black/50 lg:block hidden" onClick={handleCloseLogin}></div>
                    <div className="container-2 z-10 w-full lg:w-[600px] h-full bg-white flex flex-col">
                        <div className="signContainer flex flex-row justify-start items-center p-4 ">
                            <button className="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full bg-[var(--backgroud-color)] flex justify-center items-center" onClick={handleCloseLogin}>
                                <IoClose size={28} />
                            </button>
                            <h2 className="text-[1.1rem] font-bold mx-auto ">
                                {authStep === "login" && "Login"}
                                {authStep === "createAccount" && "Create an account"}
                                {authStep === "forgetPassword" && "Forgot password"}
                                {authStep === "resetPassword" && "Reset password"}
                            </h2>
                        </div>
                        <div className="steeps-container min-w-[100%]">
                            {authStep === "login" && <SignIn onForgetPassword={handleForgetPassword} onCreateAccount={handleCreateAccount} onClose={handleCloseLogin} />}
                            {authStep === "createAccount" && <CreateAccount onLogin={handleToLogin} onClose={handleCloseLogin} />}
                            {authStep === "forgetPassword" && <ForgetPassword onLogin={handleToLogin} />}
                            {authStep === "resetPassword" && <ResetPassword onLogin={handleToLogin} />}
                        </div>
                    </div>
                </div>
            )}
        </CustomContainer>
    );
}
