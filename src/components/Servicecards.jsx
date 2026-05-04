import React from "react";
import Images from "../components/Images";
import { GoArrowRight } from "react-icons/go";

const Servicecards = ({icon,title,para, className}) => {
  return (
    <div className={`w-[370px] bg-white shadow-lg pl-[30px] hover:scale-105 duration-300 group ${className}`}>
    <Images src={icon} className="pt-[50px]"/>
      <h3 className={`pt-[26px] pb-[15px] text-primary text-[24px] font-volkorn font-extrabold 
      ${className}`}>{title}</h3>
      <p className={`w-[245px] pb-[40px] text-regular font-jost text-[16px] text-[#00413D] 
        ${className}`}>
       {para}
      </p>
     <GoArrowRight className={`text-[35px] text-primary group-hover:text-secondary ${className}`}/>
    </div>
  );
};

export default Servicecards;
