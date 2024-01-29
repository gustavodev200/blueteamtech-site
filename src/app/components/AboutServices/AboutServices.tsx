import React from 'react';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { ForYourBusiness } from './components/ForYourBusiness';
import { HowWeWork } from './components/HowWeWork';
import { Services } from './components/Services';

export const AboutServices: React.FC = () => {
  return (
    <section className="flex-col w-full max-w-[1170px]  h-full min-h-screen mx-auto px-2">
      <About />
      <HowWeWork />
      <ForYourBusiness />
      <Services />
      <ContactUs />
    </section>
  );
};
