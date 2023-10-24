"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testi = () => {
  return (
    <div className="w-screen h-[400px] overflow-hidden bg-yellow-700/30">
      <div className="flex justify-center items-center h-full">
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          <div className="flex flex-col items-center p-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-1 bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>
            <div className="">
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-2  bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>

            <div>
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-3  bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>
            <div>
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-4  bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>
            <div>
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-1  bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>
            <div>
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="bg-white w-[110px] h-[110px] mb-5 p-[5px] rounded-full">
              <div className="bg-testi-2  bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
            </div>
            <div>
              <h1>Hello</h1>
              <p className="w-[400px] md:w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                officiis quos. Assumenda sunt eligendi impedit!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testi;
