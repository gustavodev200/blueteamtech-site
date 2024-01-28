import React from 'react';

export const HowWeWork: React.FC = () => {
  return (
    <>
      <div className="mb-[70px]">
        <div className="flex justify-between max-[1000px]:flex-col min-[1000px]:items-center">
          <div className="w-full text-start min-[1000px]:max-w-[450px]">
            <h5 className="uppercase text-primary-600 tracking-widest mb-5">
              Como nós trabalhamos
            </h5>

            <h3 className="font-bold text-[2.5rem] mb-[31px]">
              Fazemos seu projeto do seu jeito
            </h3>

            <p className="text-[1rem] text-primary-600">
              Aplicando habilidades técnicas, de design e entendimento de
              negócio, trabalhamos para atender suas necessidades e do seu
              negócio.
            </p>
          </div>

          <div>
            {[
              { number: '1', text: 'Profissionalismo acima de tudo' },
              { number: '2', text: 'Valorizamos seu feedback contínuo' },
              { number: '3', text: 'Buscamos atender suas necessidades' },
            ].map((item) => (
              <div key={item.number} className="flex items-center mb-4">
                {' '}
                <h1 className="font-bold text-[4.5rem] pr-4">
                  {item.number}
                </h1>{' '}
                <h4 className="font-bold text-[1.5rem]">{item.text}</h4>{' '}
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="text-primary-600" />
    </>
  );
};
