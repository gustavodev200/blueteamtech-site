/* eslint-disable @next/next/no-img-element */
import React from "react";

export const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center mb-[111px] mt-[5rem]">
      <img
        className="max-w-full "
        src="/images/Programming-amico 1.svg"
        alt="img-desenvolvendo-htm-css-c++"
      />
      <div className="w-full max-w-[500px]">
        <h5 className=" uppercase tracking-widest text-primary-600 mb-5">
          Sobre
        </h5>
        <h2 className="text-5xl font-bold mb-[26px] ">
          Um time de <span className=" text-primary-500">Devs</span> capacitados
        </h2>
        <p className="text-primary-900 font-bold mb-[18px]">
          Oferecemos cobertura completa de serviços.
        </p>
        <p className="text-primary-600 ">
          Do design a entrega do produto, nosso time possui habilidades para
          transformar seu projeto em realidade. Seja uma plataforma de
          e-commerce, site pessoal ou landing page comercial.
        </p>
      </div>
    </div>
  );
};
