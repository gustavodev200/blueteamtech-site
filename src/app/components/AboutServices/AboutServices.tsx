import React from "react";
import { About } from "./components/About";
import { HowWeWork } from "./components/HowWeWork";
import { ForYourBusiness } from "./components/ForYourBusiness";
import { Services } from "./components/Services";
import { ContactUs } from "./components/ContactUs";

export const AboutServices: React.FC = () => {
  return (
    <section className="flex-col w-full max-w-[1170px]  h-full min-h-screen mx-auto">
      <About />
      <HowWeWork />
      <ForYourBusiness />
      <Services />
      <ContactUs />
    </section>
  );
};
