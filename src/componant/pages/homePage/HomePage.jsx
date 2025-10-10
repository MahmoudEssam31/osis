import React from "react";
import CustomContainer from "../../ui/CustomContainer";
import FurnitureStore from "./FurnitureStore";
import Banner from "../../ui/Banner";
import { bannerHomePageDate } from "../../../data/Data";
import clsx from "clsx";
import CategSecHomePage from "./CategSecHomePage";
import TopProducts from "./TopProducts";
import ContainerTopPro from "../ContainerTopPro";
import DesignInspiration from "./DesignInspiration";
import ContainerDesign from "../../design/ContainerDesign";
import Faq from "./Faq";
import ContainerFaq from "./ContainerFaq";

export default function HomePage(customClass) {
    return (
        <CustomContainer>
            <FurnitureStore />
            <Banner data={bannerHomePageDate} />
            <CategSecHomePage />
            <ContainerTopPro />
            <ContainerDesign />
            <ContainerFaq />
        </CustomContainer>
    );
}
