import React from "react";
import Images from "../components/Images";
import IconOne from "../assets/icon.png"
import { GoArrowRight } from "react-icons/go";

const Servicecards = () => {
  return (
    <div className="w-[370px] bg-white shadow-lg pl-[30px] ">
    <Images src={IconOne} className="pt-[50px]"/>
      <h3 className="pt-[26px] pb-[15px] text-primary text-[24px] font-volkorn font-extrabold">Ui/Ux Design</h3>
      <p className="w-[245px] pb-[40px] text-regular font-jost text-[16px] text-[#00413D]">
        Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na
        aibus minima veniam.
      </p>
     <GoArrowRight className="text-[35px] text-primary"/>
    </div>
  );
};

export default Servicecards;
