import React from "react";

const Label = ({ title, children }) => (
  <>
    <label className="capitalize  text-[16px] leading-[20px] font-bold text-[#666666]">
      {title}
      <div className="mt-[4px] w-full">{children}</div>
    </label>
  </>
);

export default Label;
