import Image from 'next/image';

export const ContactUs = () => {
  return (
    <div className="w-full bg-primary-300 rounded-lg relative mt-72 mb-52 p-20 max-[1000px]:pt-[18.75rem] max-[1000px]:px-8 max-[380px]:pt-[10rem]">
      <Image
        src="/images/svg-contact-us.svg"
        alt="img-contact-us"
        width={520}
        height={470}
        className="absolute right-16 bottom-16 max-[1000px]:right-[calc(50%-250px)] max-[1000px]:bottom-60 max-[575px]:max-w-[350px] max-[575px]:right-[calc(50%-175px)] max-[1000px]:bottom-96 max-[380px]:max-w-[250px] max-[380px]:right-[calc(50%-125px)]"
      />

      <h5 className="uppercase text-[#FFFFFF] tracking-widest mb-7">
        começe agora
      </h5>

      <h4 className="font-bold text-[2rem] mb-[16px] min-[1001px]:max-w-[450px]">
        Nós ajudamos o seu negócio a decolar!
      </h4>

      <button className="text-[#fff] bg-gradient-to-r font-bold from-primary-500 via-primary-500 to-primary-600 hover:bg-gradient-to-br focus:outline-none  rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 ease-in-out">
        FALE CONOSCO
      </button>
    </div>
  );
};
