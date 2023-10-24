"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const WhatOfer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine", offset: 100 });
  });

  return (
    <div className="bg-slate-100 w-screen h-full pb-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pr-10 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-semibold text-black text-center uppercase">
            hemorrhoid / በሰገራ መውጫ ኪንታሮት
          </h1>
          <p className="text-black text-center flex justify-center items-center text-base pt-4">
            በ ሀዋሳ ሀይቅ ፓሊ መካከለኛ ክሊኒክ ከምንሰጣቸው የተለያዩ
            <br /> የህክምና አገልግሎቶች በተጨማሪ በሰገራ መውጫ የፊንጢጣ ኪንታሮት፣ የሚደማ፣
            <br /> የሚያሳክክና ወገብን የሚያም ያለ ቀዶ ጥገና አክም ማዳን!
          </p>
          <p className="text-black text-center text-base pt-4">
            Your Comfort, Our Priority:
            <br /> Hemorrhoid Relief, Surgery-Free!
          </p>
        </div>
        <div
          className="bg-care-1 bg-cover bg-center p-5 w-[350px] h-[350px] mt-5 rounded-lg shadow-xl flex justify-center items-center "
          data-aos="fade-left"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pl-10 flex flex-col justify-center sm:order-first md:order-last"
          data-aos="fade-left"
        >
          <h1 className="text-3xl text-black text-center">ፈገግታዎን ይመልሱ</h1>
          <p className="text-black text-center text-base pt-4">
            እጅግ ዘመናዊና ውብ በሆነው የጥርስ ክሊኒካችን መተው ፈገግታዎን ይመልሱ።
            <br />
            የታካሚዎቻችን የጥርስ ጤንነትና እና ውበት ቀዳሚ ትኩረታችን ነው።
          </p>
          <p className="text-black text-center text-base pt-4">
            Smiles, Care, and Expertise
            <br /> Your Dental Health is Our Priority!
          </p>
        </div>
        <div
          className="bg-care-2 bg-cover bg-center rounded-lg shadow-xl p-5 w-[450px] h-[350px] mt-5"
          data-aos="fade-right"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pr-10 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h1 className="text-3xl text-black text-center">ከመልካም መስተንግዶ ጋር</h1>
          <p className="text-black text-center text-base pt-4">
            በዘርፉ የረጅም ግዜ ልምድ ካካበቱ የህክምና ባለሙያዎች ጋር
            <br />
            ዘመኑ ባፈራው የህክምና መሳርያ ልናገለግሎ ተዘዳጅተናል።
          </p>
        </div>
        <div
          className="bg-care-3 bg-cover bg-center p-5 w-[450px] rounded-lg shadow-xl h-[350px] mt-5"
          data-aos="fade-left"
        >
          <h1 className="flex justify-center items-center uppercase h-full font-bold text-gray-200/70 text-5xl">
            Treatment
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhatOfer;
