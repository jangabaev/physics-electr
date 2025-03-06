import React, { useState } from "react";
import { Sourse } from "./sourse";

export const Instruments = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative h-full">
      <div className="absolute top-[100px] left-[10px]">
        {modal && (
          <div className="bg-white shadow-lg p-2 rounded-[10px]">
            <h3 className="text-xl font-bold mb-[10px]">Pyhsics instruments</h3>
            <div className="bg-gray-100 p-2">
              <Sourse />
            </div>
          </div>
        )}
        <button
          className="cursor-pointer top-[50%] flex w-[30px] flex-col bg-cyan-500 p-[5px] mt-[8px]"
          onClick={() => setModal(!modal)}
        >
          <div className="h-[3px] w-[20px] bg-black"></div>
          <div className="h-[3px] w-[20px] bg-black my-[4px]"></div>
          <div className="h-[3px] w-[20px] bg-black"></div>
        </button>
      </div>
    </div>
  );
};
