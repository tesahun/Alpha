"use client";
import { useState } from "react";

const Accord = (props) => {
  const [item, setItem] = useState(props.datas);

  const handletoggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`bg-slate-200 p-5 border mb-2 border-slate-500 rounded-md w-[400px] duration-500 overflow-hidden group ${
        item.active === 1 ? "is-active bg-white" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="w-full duration-500 group-[.is-active]:font-bold">
          {item.question}
        </div>
        <div
          className="text-xl rotate-0 duration-500 group-[.is-active]:rotate-[180deg] cursor-pointer"
          onClick={handletoggleActive}
        >
          v
        </div>
      </div>
      <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px]">
        {item.answer}
      </div>
    </div>
  );
};

export default Accord;
