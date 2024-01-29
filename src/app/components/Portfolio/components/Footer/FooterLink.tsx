import Link from "next/link";
import React from "react";

type FooterLinkProps = {
  navLink: string;
  text: string;
};

const FooterLink = ({ text, navLink }: FooterLinkProps) => {
  return (
    <Link href={navLink} className="text-sm mb-2">
      {text}
    </Link>
  );
};

export default FooterLink;
