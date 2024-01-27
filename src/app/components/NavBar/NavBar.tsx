'use client';

import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const NavBar: React.FC = () => {
  const trigger = useScrollTrigger(1);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleAutoClose = () => {
      if (window.innerWidth > 730) {
        setIsOpen(true);
        setIsMobile(false);
      } else if (window.innerWidth <= 730) {
        setIsOpen(false);
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleAutoClose);

    return () => {
      window.removeEventListener('resize', handleAutoClose);
    };
  }, []);

  return (
    <nav
      className={`z-10 overflow-hidden fixed px-8 py-2 max-[600px]:gap-6 rounded-[33px] max-[1186px]:rounded max-[1186px]:w-[calc(100vw-1rem)] top-4 bg-primary-900/50 left-2 min-[1186px]:left-[calc(50%-585px)] w-full max-w-[1170px] flex max-[600px]:flex-col items-center justify-between gap-2 transition-all duration-500 ease-in-out ${
        trigger || (isMobile && isOpen)
          ? 'shadow-2xl shadow-black backdrop-blur-sm'
          : ''
      } ${
        isOpen
          ? 'max-[600px]:w-[calc(100vw-1rem)] max-[600px]:h-[16.875rem] max-[600px]:p-4'
          : 'max-[600px]:w-12 max-[600px]:h-12 max-[600px]:p-0'
      }`}
    >
      <div className="w-full min-[600px]:hidden">
        <button
          className="text-white p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={32} weight="bold" />
          ) : (
            <List size={32} weight="bold" />
          )}
        </button>
      </div>

      <Image
        src="/logo.svg"
        alt="Logo"
        width={114}
        height={50}
        className="max-[730px]:hidden"
      />

      <ul className="overflow-hidden flex max-[600px]:flex-col max-[600px]:gap-3 items-center justify-between w-full max-w-[370px] text-white">
        <li>
          <a className="hover:underline" href="#">
            Sobre
          </a>
        </li>

        <li>
          <a className="hover:underline" href="#">
            Serviços
          </a>
        </li>

        <li>
          <a className="hover:underline" href="#">
            Portfólio
          </a>
        </li>
      </ul>

      <button className="max-[600px]:w-full text-white text-sm font-black py-3 px-8 rounded uppercase border border-white/30 hover:bg-white hover:text-primary-900 transition-colors duration-200 ease-in-out">
        contato
      </button>
    </nav>
  );
};
