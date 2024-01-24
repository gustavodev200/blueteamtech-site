import React from "react";

type FooterTitleProps = {
  title: string;
};

const FooterTitle = ({ title }: FooterTitleProps) => {
  return <div className="mb-4 text-primary-600">{title}</div>;
};

export default FooterTitle;
