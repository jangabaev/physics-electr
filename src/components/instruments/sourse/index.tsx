import React from "react";
import { CardForInstruments } from "../../ui/card/index";

const instrumentsData = [
  {
    id: 1,
    img: "/assets/capasitor-png.png",
    name: "capasitor",
    type: "capasitor",
  },
  {
    id: 2,
    img: "/assets/resistance-png.png",
    name: "resistance",
    type: "resistance",
  },
  {
    id: 3,
    img: "/assets/sourse-png.png",
    name: "sourse",
    type: "sourse",
  },
];

export const Sourse = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {instrumentsData.map((el) => (
        <div key={el.id} onDrag={(el) => console.log(el)}>
          <div className="p-1 bg-white shadow-lg rounded-lg overflow-hidden flex justify-center flex-col gap-1">
            <div className="flex justify-center">
              <img src={el.img} alt="" className="w-[40px] h-[40px]" />
            </div>
            <p className="text-center text-[10px]">{el.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
