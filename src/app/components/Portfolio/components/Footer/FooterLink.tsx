"use client";

import useScrollToAnchor from "@/hooks/useScrollToAnchor";
import React from "react";

type FooterLinkProps = {
  navLink: string;
  text: string;
};

const FooterLink = ({ text, navLink }: FooterLinkProps) => {
  const scrollToAnchor = useScrollToAnchor();
  return (
    <span
      onClick={() => {
        scrollToAnchor(navLink);
      }}
      className="text-sm mb-2 cursor-pointer hover:underline"
    >
      {text}
    </span>
  );
};

export default FooterLink;
