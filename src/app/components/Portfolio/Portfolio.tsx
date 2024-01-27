import React from "react";
import ProjectCard from "./components/ProjectCard";
import TitlePage from "./components/TitlePage";
import DeveloperInfo from "./components/DeveloperInfo";
import ContactForm from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { Footer } from "./components/Footer";
import FooterLink from "./components/Footer/FooterLink";

export const Portfolio: React.FC = () => {
  return (
    <section className="w-full h-full bg-primary-900">
      <div className="w-full max-w-[1170px] h-full flex flex-col py-10 justify-center mx-auto text-white pb-[280px]">
        <header className="flex flex-col items-center">
          <h5 className="text-primary-300 ">PORTFOLIO</h5>
          <h2 className="w-full text-center text-[#fff] font-bold text-4xl mt-5">
            Nossos Projetos
          </h2>
        </header>
        <main className="mt-[3.75rem]">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <ProjectCard
                size="md"
                imageProjectURL="/images/mockup_site_odonto.png"
                title="Odonto Clean"
                description="Site foi projetado para proporcionar uma experiência informativa e amigável aos pacientes, garantindo que todos os visitantes encontrem as informações necessárias sobre nossos serviços e equipe dedicada.
                "
                projectLink="https://odonto-clean-beige.vercel.app/"
              />
              <ProjectCard
                size="lg"
                imageProjectURL="/images/breve.png"
                title="Em breve..."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
              <ProjectCard
                size="lg"
                imageProjectURL="/images/breve.png"
                title="Em breve..."
              />
              <ProjectCard
                size="md"
                imageProjectURL="/images/breve.png"
                title="Em breve..."
              />
            </div>
          </div>

          <div className="flex flex-col mt-12">
            <TitlePage text="Nosso time" />

            <div className="flex justify-between md:flex-row flex-col  items-center">
              <DeveloperInfo
                imageURL="/images/gustavo.png"
                name="Gustavo Lage"
                skills="Desenvolvedor/Designer"
                about="https://www.linkedin.com/in/gustavo-lage/"
              />
              <DeveloperInfo
                imageURL="/images/lucas.png"
                name="Lucas Fonseca"
                skills="Desenvolvedor/Designer"
                about="https://www.linkedin.com/in/lucasofon/"
              />

              <DeveloperInfo
                imageURL="/images/joao.png"
                name="João Victor"
                skills="Desenvolvedor/Designer"
                about="https://www.linkedin.com/in/jo%C3%A3o-victor-rodrigues-6808431b7/"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="w-full h-full bg-primary-100 pt-[224px] ">
        <div className="w-full relative max-w-[1170px] h-full flex flex-col py-10 justify-center mx-auto text-white">
          <ContactForm />
          <div className="w-full flex flex-col md:flex-row  mt-16">
            <ContactInfo.Root>
              <ContactInfo.Header icon="/images/phone.svg" title="TELEFONES" />
              <div className="flex gap-5 flex-col sm:flex-row">
                <ContactInfo.Text text="(62) 98532-0242" />
                <ContactInfo.Text text="(62) 98519-3471" />
                <ContactInfo.Text text="(62) 98154-2871" />
              </div>
            </ContactInfo.Root>
            <ContactInfo.Root>
              <ContactInfo.Header icon="/images/mail.svg" title="E-MAIL" />
              <ContactInfo.Text text="blueteamtech.contato@gmail.com" />
            </ContactInfo.Root>
          </div>

          <div>
            <Footer.Root>
              <div>
                <Footer.Title title="MENU" />
                <div className="flex flex-col">
                  <FooterLink navLink="Sobre" text="Sobre" />
                  <FooterLink navLink="Serviços" text="Serviços" />
                  <FooterLink navLink="Portfolio" text="Portfolio" />
                </div>
              </div>
              <div className="flex gap-4">
                <Footer.SocialMedia
                  icon="/images/github.svg"
                  link="https://github.com/blueteamtechoficial"
                />
                <Footer.SocialMedia
                  icon="/images/insta.svg"
                  link="https://www.instagram.com/blue_team_tech/"
                />
              </div>
            </Footer.Root>
            <Footer.RightsReserved />
          </div>
        </div>
      </div>
    </section>
  );
};
