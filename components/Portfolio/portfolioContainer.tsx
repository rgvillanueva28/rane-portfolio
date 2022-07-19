import React from "react";

interface Props {
  children: React.ReactNode;
}

function PortfolioContainer({ children }: Props) {
  return <div>{children}</div>;
}

export default PortfolioContainer;
