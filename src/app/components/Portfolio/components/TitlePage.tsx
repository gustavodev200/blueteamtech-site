import React from "react";

type TitlePageProps = {
  text: string;
};

const TitlePage = ({ text }: TitlePageProps) => {
  return (
    <h2 className="w-full text-center md:text-start text-[#fff] font-bold text-4xl mt-5">
      {text}
    </h2>
  );
};

export default TitlePage;
