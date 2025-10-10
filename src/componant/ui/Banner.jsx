import React from "react";
import CustomContainer from "./CustomContainer";
import {Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Banner({ customClass, data }) {
    return (
        <section className={clsx("banner", customClass)}>
            <CustomContainer customClass={""}>
                <Swiper
                    effect={"fade"}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 2500,
                    }}>
                    {data.map((items, index) => (
                        <SwiperSlide>
                            <div className="banner-container mt-8 ">
                                <img src={items.image} alt="" className="rounded-2xl" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CustomContainer>
        </section>
    );
}
