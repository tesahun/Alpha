"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurProducts = () => {
  const [text] = useTypewriter({
    words: [
      "ሀዋሳ ሀይቅ ፓሊ መካከለኛ ክሊኒክ፡ ",
      "ከምንሰጣችው ህክምናዎች በተጨማሪ ",
      "በሰገራ መውጫ የፊንጢጣ ኪንታሮት፣",
      "የሚደማ፣ የሚያሳክክና ወገብን የሚያም ",
      "ያለ ቀዶ ጥገና አክም ማዳን!",
      "ያለ ቀዶ ጥገና አክም ማዳን!",
      "የዚህ እህት ድርጅት በሆነው...",
      "ታም-ዳግ፡ መካከለኛ የጥርስ ህክምና ክሊኒክ፣  ዘርፈ ",
      "ብዙ የጥርስ ህክምና",
      "ዘመኑ ባፈራቸው የህክምና መሳርያዎች በመጠቀም",
      "ዘርፈ ብዙ የጥርስ ህክምና",
    ],
    loop: 0,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine", offset: 100 });
  });

  return (
    <div className="w-screen max-h-screen mt-[50px] flex justify-center items-center overflow-hidden ">
      <div className="lg:flex lg:gap-20 sm:pb-[50px]">
        <div>
          <h1 className="text-3xl uppercase text-center ">አገልግሎታችን</h1>
          <div className=" flex flex-col mt-2 md:justify-center sm:w-[400px] sm:h-[150px] md:w-[400px]">
            <h1 className="font-semibold text-lg md:text-2xl text-yellow-500 flex justify-center items-center uppercase h-10">
              <span className="text-center sm:max-w-200px">{text}</span>
            </h1>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 grid-rows-5 w-[430px] h-[500px] sm:mt-4"
          data-aos="fade-left"
        >
          <div className=" bg-our-bg bg-cover bg-center p-7 row-span-3 rounded-3xl shadow-lg"></div>
          <div className=" bg-our-1 p-7 bg-cover bg-center row-span-2 rounded-3xl shadow-lg "></div>
          <div className=" bg-our-3 bg-cover bg-center p-7 row-span-3 rounded-3xl shadow-lg "></div>
          <div className=" bg-our-2 bg-cover bg-center p-7 row-span-2 rounded-3xl shadow-lg "></div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
