"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import add1 from "../../assaest/banner.webp";
import add2 from "../../assaest/banner1.webp";
import add3 from "../../assaest/banner2.webp";
import add4 from "../../assaest/banner3.webp";
import add5 from "../../assaest/banner4.webp";
import add6 from "../../assaest/banner5.webp";
import add7 from "../../assaest/banner6.webp";
import add8 from "../../assaest/banner7.webp";
import add9 from "../../assaest/banner8.webp";
import Image from "next/image";

const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: true
    };
    return (
        <div className="slider-container py-20">
            <Slider {...settings}>
                <div>
                    <Image src={add1} width={1540} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add7} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add6} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add5} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add4} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add3} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add2} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add8} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add9} width={1540} height={300} alt="add1"></Image>
                </div>
            </Slider>
        </div>
    );
};

export default AutoPlay;