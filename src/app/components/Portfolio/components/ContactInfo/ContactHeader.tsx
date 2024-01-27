import Image from "next/image";
import React from "react";

type ContactHeaderProps = {
  icon: string;
  title: string;
};

const ContactHeader = ({ icon, title }: ContactHeaderProps) => {
  return (
    <div className="w-full flex items-center gap-4">
      <Image src={icon} alt="" width={48} height={48} />
      <h4 className="text-primary-600 tracking-wider">{title}</h4>
    </div>
  );
};

export default ContactHeader;
