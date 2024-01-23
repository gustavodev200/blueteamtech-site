import React from "react";
import ProjectCard from "./components/ProjectCard";
import TitlePage from "./components/TitlePage";
import DeveloperInfo from "./components/DeveloperInfo";

export const Portfolio: React.FC = () => {
  return (
    <section className="w-full h-full bg-primary-900">
      <div className="w-full max-w-[1170px] h-full flex flex-col py-10 justify-center mx-auto text-white">
        <header className="flex flex-col items-center">
          <h5 className="text-primary-300">PORTFOLIO</h5>
          <TitlePage text="Nossos Projetos" />
        </header>
        <main className="mt-[3.75rem]">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <ProjectCard size="md" />
              <ProjectCard size="lg" />
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <ProjectCard size="lg" />
              <ProjectCard size="md" />
            </div>
          </div>

          <div className="flex flex-col mt-12">
            <TitlePage text="Nosso time" />

            <div className="flex justify-between">
              <DeveloperInfo
                imageURL="/images/gustavo.png"
                name="Gustavo Lage"
                skills="Desenvolvedor/Designer"
              />
              <DeveloperInfo
                imageURL="/images/lucas.png"
                name="Lucas Fonseca"
                skills="Desenvolvedor/Designer"
              />

              <DeveloperInfo
                imageURL="/images/joao.png"
                name="João Victor"
                skills="Desenvolvedor/Designer"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
