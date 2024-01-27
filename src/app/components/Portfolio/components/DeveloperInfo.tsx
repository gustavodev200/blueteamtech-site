/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type DeveloperInfoProps = {
  imageURL: string;
  name: string;
  skills: string;
  about: string;
};
const DeveloperInfo = ({
  imageURL,
  name,
  skills,
  about,
}: DeveloperInfoProps) => {
  return (
    <div className="mt-10 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all duration-700 hover:scale-110">
      <a href={about} target="__blank">
        <img
          src={imageURL}
          alt={name}
          className="max-w-[18rem] max-h-[18rem]"
        />
      </a>
      <h4 className="text-[#fff] font-bold text-2xl mt-[1.5rem]">{name}</h4>
      <span className="text-secondary-200">{skills}</span>
    </div>
  );
};

export default DeveloperInfo;
