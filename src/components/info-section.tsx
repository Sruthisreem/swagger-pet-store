import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Info } from "../interface/interfaces";
interface InfoSectionProps {
  info: Info;
}

const InfoSection: FC<InfoSectionProps> = ({ info }) => {
  return (
    <>
      <div className="py-4 flex flex-col">
        <ReactMarkdown children={info.description} />
        <div className="py-1">
          <span className="font-bold">Version: </span>
          {info.version}
        </div>
        <div className="py-1">
          <span className="font-bold">Terms of Service: </span>
          <a href={info.termsOfService}>{info.termsOfService}</a>
        </div>
        <div className="py-1">
          <span className="font-bold">Contact Us: </span>
          {info.contact.email}
        </div>
      </div>
    </>
  );
};

export default InfoSection;
