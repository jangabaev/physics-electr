import React, { ReactNode } from "react";

export const CardForInstruments = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-1 bg-white shadow-lg rounded-lg w-[40px] h-[40px]">
      {children}
    </div>
  );
};
