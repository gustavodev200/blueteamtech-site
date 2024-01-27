import Image from "next/image";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="w-full h-[336px] bg-primary-300 rounded-lg relative mt-72 mb-52">
      <Image
        src="/images/svg-contact-us.svg"
        alt="img-contact-us"
        width={520}
        height={470}
        className="absolute right-16 bottom-16"
      />

      <div className="p-20">
        <h5 className="uppercase text-[#FFFFFF] tracking-widest mb-7">
          começe agora
        </h5>
        <h4 className="font-bold text-[2rem] mb-[16px] max-w-[450px]">
          Nós ajudamos o seu negócio a decolar!
        </h4>

        <button className="text-[#fff] bg-gradient-to-r font-bold from-primary-500 via-primary-500 to-primary-600 hover:bg-gradient-to-br focus:outline-none  rounded-lg text-sm px-5 py-3 text-center">
          FALE CONOSCO
        </button>
      </div>
    </div>
  );
};
