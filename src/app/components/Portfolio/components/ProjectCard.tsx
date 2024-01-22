import React from "react";

type SizeCardProjectProps = {
  size: "md" | "lg";
};
const ProjectCard = ({ size }: SizeCardProjectProps) => {
  const sizeClass = {
    md: "w-3/5",
    lg: "w-full",
  }[size];
  return (
    <div
      className={`max-w-screen-sm ${sizeClass} h-[20rem] bg-primary-300 rounded-lg`}
    >
      ProjectCard
    </div>
  );
};

export default ProjectCard;
