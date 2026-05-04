import React from "react";
import Container from "../components/Container";
import Subheading from "../components/Subheading";
import Heading from "../components/Heading";
import Servicecards from "../components/Servicecards";
import IconOne from "../assets/icon.png";
import IconTwo from "../assets/icon2.png";
import IconThree from "../assets/icon3.png"
import Flex from "../components/flex";

const Services = () => {
  return (
    <section>
      <Container>
        <Subheading
          text="MY SERVICES"
          className="text-secondary text-center font-volkorn text-[18px] font-medium pt-[220px]"
        ></Subheading>
        <Heading
          text="Provide Wide Range of Digital Services"
          className="text-primary text-center font-volkorn font-medium text-[50px] pb-[40px] w-[517px] mx-auto"
        ></Heading>
       <Flex className="justify-between">
              <Servicecards
            icon={IconOne}
            title="UI/UX Design"
            para="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
          />
          <Servicecards
            icon={IconTwo}
            title="Mobile App Design"
            para="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
          />
          <Servicecards icon={IconThree}
          title="Web Design" 
          para="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
       </Flex>
      </Container>
    </section>
  );
};

export default Services;
