import React from "react";
import Container from "../components/Container";
import Subheading from "../components/Subheading";
import Heading from "../components/Heading";
import Servicecards from "../components/Servicecards";
const Services = () => {
  return (
    <section>
      <Container>
         
        <Subheading
          text="MY SERVICES"
          className="text-secondary text-center font-volkorn text-[18px] font-medium pt-[220px]">
          </Subheading>
        <Heading
          text="Provide Wide Range of Digital Services"
          className="text-primary text-center font-volkorn font-medium text-[50px] pb-[40px] w-[517px] mx-auto"
        ></Heading>

        <Servicecards></Servicecards>
      </Container>
    </section>
  );
};

export default Services;
