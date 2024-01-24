import React from "react";

type FooterRootProps = {
  children: React.ReactNode;
};

const FooterRoot = ({ children }: FooterRootProps) => {
  return (
    <div className="w-full flex py-6 justify-between mt-16 border-b-[1px] border-primary-300">
      {children}
    </div>
  );
};

export default FooterRoot;
