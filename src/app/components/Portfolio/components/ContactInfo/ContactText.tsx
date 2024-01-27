import React from "react";

type ContactTextProps = {
  text: string;
};

const ContactText = ({ text }: ContactTextProps) => {
  return <div className="mt-5 font-bold">{text}</div>;
};

export default ContactText;
