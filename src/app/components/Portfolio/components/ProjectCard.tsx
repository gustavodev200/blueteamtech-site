/* eslint-disable @next/next/no-img-element */
import { url } from "inspector";
import React from "react";

type CardProjectProps = {
  size: "md" | "lg";
  imageProjectURL: string;
  description: string;
  title: string;
};
const ProjectCard = ({
  size,
  imageProjectURL,
  description,
  title,
}: CardProjectProps) => {
  const sizeClass = {
    md: "w-3/5",
    lg: "w-full",
  }[size];
  return (
    <div
      className={`max-w-screen-sm sm:${sizeClass} h-[20rem] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-[#000]/30 rounded-lg`}
    >
      <div className="w-full h-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageProjectURL}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000] group-hover:from-[#000]/70 group-hover:via-[#000]/60 group-hover:to-[#000]/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="mb-4 font-dmserif text-2xl font-bold text-[#fff] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </h1>
        <p className="mb-3 text-md italic text-[#FFF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <button className="rounded-full bg-primary-500 py-2 px-3.5 font-com text-sm capitalize text-[#fff] shadow shadow-[#000]/60">
          Ver Projeto
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
