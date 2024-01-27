import React from 'react';
import { Illustration } from './components/Illustration';

export const Cover: React.FC = () => {
  return (
    <section className="w-full h-dvh bg-primary-900">
      <div className="w-full max-w-[1170px] h-full flex items-center justify-between px-4 mx-auto text-white max-[900px]:flex-col-reverse max-[900px]:justify-center">
        <div className="w-full max-w-[735px]">
          <h6 className="mb-6 font-normal text-primary-300 max-[900px]:text-sm">
            &lt;DEVELOPERS GROUP /&gt;
          </h6>

          <h1 className="max-[900px]:text-3xl">
            Nós ajudamos <span className="text-primary-500">você</span> a
            construir o projeto dos{' '}
            <span className="text-primary-500">seus sonhos</span>!
          </h1>

          <div className="relative w-full max-w-[470px] mt-9 text-white/65 font-normal leading-8 before:content-[''] before:absolute before:block before:w-[4px] before:h-full before:bg-primary-500 before:rounded">
            <p className="ml-3">
              Oferecemos cobertura completa de serviços, incluindo habilidades
              técnicas, design e entendimento de negócio.
            </p>
          </div>
        </div>

        <Illustration />
      </div>
    </section>
  );
};
