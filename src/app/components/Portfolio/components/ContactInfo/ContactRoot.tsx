import React from "react";

type ContactRootProps = {
  children: React.ReactNode;
};

const ContactRoot = ({ children }: ContactRootProps) => {
  return (
    <div className="w-full border-[1px] border-primary-300 rounded-sm p-5">
      {children}
    </div>
  );
};

export default ContactRoot;
