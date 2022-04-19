import React, { FC } from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
};

export default Header;
