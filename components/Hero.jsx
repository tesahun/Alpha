"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Footer from "./Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";

import { useState } from "react";

import { FaFacebook } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";

import { FaTelegramPlane } from "react-icons/fa";

import MyForm from "./MyForm";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init({ duration: 100 });
  });

  return (
    <div className="w-screen h-[800px] z-50 overflow-hidden">
      <div className="relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={4000} //
          transitionTime={1000}
          fade
        >
          <div className="bg-cover bg-center w-screen  bg-img-bg h-[800px]"></div>
          <div className="bg-cover bg-center w-screen bg-cls-bg h-[800px]"></div>
        </Carousel>
        <div
          className="w-full h-full absolute top-[30px] flex flex-col justify-center items-center z-40"
          data-aos="fade-up"
        >
          <div className="bg-logo-1 bg-cover bg-center w-[80px] h-[80px] relative mr-32">
            <h1 className="text-5xl uppercase font-bold text-white absolute bottom-0 left-[70px]">
              Alpha
            </h1>
          </div>
          <h1 className="uppercase text-center text-3xl font-extrabold text-yellow-500 text-shadow-lg">
            ሐዋሳ ሀይቅ ፓሊ መካከለኛ ክሊኒክ
          </h1>

          <div className="relative">
            <div className="w-screen flex justify-center items-center">
              <div className="bg-logo-2 bg-cover bg-center w-[70px] h-[70px] "></div>
            </div>
            <h1 className="uppercase text-center text-3xl font-extrabold text-yellow-500 text-shadow-lg pb-6">
              ታም-ዳግ መካከለኛ የጥርስ ህክምና ክሊኒክ
            </h1>
          </div>

          <p className="text-center text-slate-200  text-sm sm:pl-8 sm:pr-8 pt-5 md:w-[500px] text-shadow-lg">
            Your health, our priority. Trust us for all your care needs.Visit us
            for dental excellence today.
          </p>
          <button
            onClick={openModal}
            className="mt-16 py-2 px-4 hover:bg-yellow-300 hover:border-transparent rounded border border-slate-200 text-slate-100 font-semibold hover:text-black z"
          >
            Applay Now!
          </button>
          <MyForm isOpen={isModalOpen} onClose={closeModal} />
        </div>

        <div className="w-full h-full absolute flex justify-center items-end gap-[50px] -top-10 md:flex-col md:pr-10 md:pt-20 z-20">
          <FaFacebook size={25} style={{ color: "#F8F8FF" }} className="icon" />
          <BsWhatsapp size={25} style={{ color: "#F8F8FF" }} className="icon" />
          <div className="icon cursor-pointer">
            <a href="https://t.me/@mann4108">
              <FaTelegramPlane size={25} style={{ color: "#F8F8FF" }} />
            </a>
          </div>
        </div>
        <Link href="/adress">
          <div className="bg-place-p bg-cover bg-center w-7 h-7 flex items-center bottom-32 left-5 hover-effect cursor-pointer fixed z-40">
            <h1 className="text-white text-xs pt-12 text-shadow-lg">አድራሻ</h1>
          </div>
        </Link>

        <div className="bg-black w-full h-[800px] absolute top-0 opacity-60 z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
