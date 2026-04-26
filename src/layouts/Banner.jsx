import React from "react";
import Container from "../components/Container";
import Buttons from "../components/Buttons";

const Banner = () => {
  return (
    <section className=" relative bg-primary py-[230px] group">
      <div className="absolute bg-banner bg-no-repeat bg-cover top-0 right-0 h-full w-0 group-hover:w-5/12 duration-300 "></div>
      <Container>
        <h1 className="text-[100px] relative text-white font-bold font-volkorn leading-[110px]">
          Hello! <br /> I’m Zarror Nibors
        </h1>
        <p className="w-[670px] text-xl text-primary font-jost font-regular text-white pt-[14px] pb-[50px]">
          I’am freelance UI/UX Designer based in Indonesia who loves to craft
          attractive design experiences for the web.
        </p>
        <Buttons text="Contact Me" />
      </Container>
    </section>
  );
};

export default Banner;
