import Image from "next/image";
import React from "react";

export const Services = () => {
  return (
    <section className="mb-[7rem]">
      <header>
        <h5 className="uppercase text-primary-600 tracking-widest mb-7">
          Serviços
        </h5>

        <h3 className="font-bold text-[2.5rem] mb-[3rem]">
          Como podemos te ajudar
        </h3>
      </header>
      <main>
        <div className=" flex justify-between flex-col md:flex-row border-[1px] border-primary-300 rounded-md">
          <div className="p-10 max-w-full md:max-w-[33%]">
            <Image
              src="/images/design.svg"
              alt="Design"
              width={80}
              height={80}
            />
            <h4 className="font-bold text-[1.5rem] mb-[18px] mt-[36px]">
              Design
            </h4>
            <p className="text-primary-600 mt-4">
              Com nossa experiência em web design, damos forma e cor as suas
              ideias.
            </p>
          </div>
          <div className="border-t-[1px] border-b-[1px] border-primary-300 p-10 max-w-full md:max-w-[33%] md:border-l-[1px] md:border-t-[0px] md:border-b-[0px]">
            <Image src="/images/dev.svg" alt="Design" width={80} height={80} />
            <h4 className="font-bold text-[1.5rem] mb-[18px] mt-[36px]">
              Desenvolvimento
            </h4>
            <p className="text-primary-600 mt-4">
              Transformamos suas ideias em produtos reais, funcionais e de
              qualidade.
            </p>
          </div>
          <div className=" border-primary-300 p-10 mmax-w-full md:max-w-[33%] md:border-l-[1px]">
            <Image
              src="/images/visible.svg"
              alt="Design"
              width={80}
              height={80}
            />
            <h4 className="font-bold text-[1.5rem] mb-[18px] mt-[36px]">
              Visibilidade
            </h4>
            <p className="text-primary-600 mt-4">
              Alcance um público maior marcando presença online com um site para
              chamar de seu.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
