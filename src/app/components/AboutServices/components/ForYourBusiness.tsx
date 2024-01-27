/* eslint-disable @next/next/no-img-element */
import React from "react";

const businessItems = [
  {
    number: "1",
    text: "Venda mais com um e-commerce só seu",
  },
  {
    number: "2",
    text: "Chame a atenção com uma landing page comercial",
  },
  {
    number: "3",
    text: "Faça do seu site pessoal uma vitrine para o seu trabalho",
  },
];

export const ForYourBusiness: React.FC = () => {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row items-center mt-[5rem] mb-[5rem]">
        <div className="w-full">
          <h5 className="uppercase text-primary-600 tracking-widest mb-5">
            para o seu negócio
          </h5>
          <div className="text-start w-full max-w-[32rem]">
            {" "}
            <h2 className="font-bold text-[2.5rem]  mb-[1.25rem]">
              Mais visibilidade
            </h2>
            <p className=" text-primary-900 text-[1.25rem] mb-[2.93rem]">
              Faça seu negócio decolar marcando presença online com um site que
              é a cara do seu negócio!
            </p>
            {businessItems.map((item) => (
              <div key={item.number} className="flex items-center mb-4">
                <img className="w-6 h-6" src="/images/check.svg" alt="Check" />
                <p className="ml-3 text-primary-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          className="max-w-full flex items-center"
          src="/images/Startup life-amico 1.svg"
          alt="img-desenvolvendo"
        />
      </div>
    </>
  );
};
