import React from "react";
import ProjectCard from "./components/ProjectCard";

export const Portfolio: React.FC = () => {
  return (
    <section className="w-full h-dvh bg-primary-900">
      <div className="w-full max-w-[1170px] h-full flex flex-col py-10 justify-center mx-auto text-white">
        <header className="flex flex-col items-center">
          <h5 className="text-primary-300">PORTFOLIO</h5>
          <h2 className="text-[#fff] font-bold text-4xl mt-5">
            Nossos Projetos
          </h2>
        </header>
        <main className="mt-[3.75rem]">
          <div className="grid grid-cols-2 gap-4 ">
            <ProjectCard size="200px" />
            <ProjectCard size="600px" />
          </div>
        </main>
      </div>
    </section>
  );
};
