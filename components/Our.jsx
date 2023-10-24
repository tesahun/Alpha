import { FaFacebook } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";

import { FaTelegramPlane } from "react-icons/fa";

const Our = () => {
  return (
    <div className="bg-banner-1 bg-cover bg-center h-[300px] w-screen overflow-hidden">
      <div className="bg-gradient-to-t from-slate-100 w-full h-full">
        <h1 className="text-center uppercase text-3xl font-semibold pt-8">ይጎብኙን</h1>
        <div className="flex justify-center items-center gap-[50px] pt-20">
          <FaFacebook size={35} style={{ color: "#0000FF" }} className="icon" />

          <BsWhatsapp size={35} style={{ color: "#008000" }} className="icon" />

          <FaTelegramPlane
            size={35}
            style={{ color: "#4682B4" }}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Our;
