import React from "react";
import { About } from "./components/About";
import { HowWeWork } from "./components/HowWeWork";
import { ForYourBusiness } from "./components/ForYourBusiness";

export const AboutServices: React.FC = () => {
  return (
    <section className="flex-col w-full max-w-[1170px]  h-full min-h-screen mx-auto">
      <About />
      <HowWeWork />
      <ForYourBusiness />
    </section>
  );
};
