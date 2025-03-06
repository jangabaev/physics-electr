import React, { ReactNode } from "react";

export const CardForInstruments = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-1 bg-white shadow-lg rounded-lg overflow-hidden flex justify-center flex-col gap-1">
      {children}
    </div>
  );
};
