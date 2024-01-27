import React from "react";

export const About: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center mb-[111px]">
      <img
        className="max-w-full h-auto"
        src="/images/Programming-amico 1.svg"
        alt="img-desenvolvendo-htm-css-c++"
      />
      <div className="w-full max-w-[500px]">
        <h5 className=" uppercase tracking-widest mb-5 text-primary-600 ">
          Sobre
        </h5>
        <h2 className="text-4xl font-bold text-[3.5rem] mb-[26px] ">
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
