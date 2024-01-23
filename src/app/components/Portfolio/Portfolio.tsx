import React from "react";
import ProjectCard from "./components/ProjectCard";
import TitlePage from "./components/TitlePage";
import DeveloperInfo from "./components/DeveloperInfo";
import ContactForm from "./components/ContactForm";

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
              <ProjectCard
                size="md"
                imageProjectURL="https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba22cb34e6a120a2a61f6e_awayco-long-form-landing-page-example.png"
                title="Hair Hub Barbershop"
                description="Software desenvolvido como TCC simplifica o agendamento em barbearias, permitindo aos clientes escolher serviços, visualizar disponibilidade em tempo real e otimizar a gestão do tempo, com funcionalidades de cadastro e gerenciamento de clientes.
                "
              />
              <ProjectCard
                size="lg"
                imageProjectURL="https://elementor.com/marketing/wp-content/uploads/sites/9/2021/02/Landing-Page-Introduction-Post-Blog-Post-Assets_3-02.png"
                title="Hair Hub Barbershop"
                description="Software desenvolvido como TCC simplifica o agendamento em barbearias, permitindo aos clientes escolher serviços, visualizar disponibilidade em tempo real e otimizar a gestão do tempo, com funcionalidades de cadastro e gerenciamento de clientes.
                "
              />
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <ProjectCard
                size="lg"
                imageProjectURL="https://assets.materialup.com/uploads/b9639330-2c05-489d-9ace-1a92629f0e41/preview.jpg"
                title="Hair Hub Barbershop"
                description="Software desenvolvido como TCC simplifica o agendamento em barbearias, permitindo aos clientes escolher serviços, visualizar disponibilidade em tempo real e otimizar a gestão do tempo, com funcionalidades de cadastro e gerenciamento de clientes.
                "
              />
              <ProjectCard
                size="md"
                imageProjectURL="https://www.uscreen.tv/wp-content/uploads/2021/04/landing-pages.png"
                title="Hair Hub Barbershop"
                description="Software desenvolvido como TCC simplifica o agendamento em barbearias, permitindo aos clientes escolher serviços, visualizar disponibilidade em tempo real e otimizar a gestão do tempo, com funcionalidades de cadastro e gerenciamento de clientes.
                "
              />
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

          <ContactForm />
        </main>
      </div>
    </section>
  );
};
