import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterSocialMediaProps = {
  link: string;
  icon: string;
};

const FooterSocialMedia = ({ link, icon }: FooterSocialMediaProps) => {
  return (
    <a href={link} target="__blank">
      <Image src={icon} alt="" width={48} height={48} />
    </a>
  );
};

export default FooterSocialMedia;
