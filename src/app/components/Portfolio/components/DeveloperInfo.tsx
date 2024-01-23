/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type DeveloperInfoProps = {
  imageURL: string;
  name: string;
  skills: string;
};
const DeveloperInfo = ({ imageURL, name, skills }: DeveloperInfoProps) => {
  return (
    <div className="mt-10 flex flex-col justify-between cursor-pointer">
      <img src={imageURL} alt={name} className="max-w-[18rem] max-h-[18rem]" />
      <h4 className="text-[#fff] font-bold text-2xl mt-[1.5rem]">{name}</h4>
      <span className="text-secondary-200">{skills}</span>
    </div>
  );
};

export default DeveloperInfo;
