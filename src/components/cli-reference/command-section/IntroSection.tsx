import React from "react";
import "./CommandSection.css";
import { OpenCliDocument } from "../../../OpenCli";

interface IntroSectionProps {
  doc: OpenCliDocument;
}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  return (
    <section className="command-section">
      <h1>{props.doc.info.title}</h1>
    </section>
  );
};

export default IntroSection;
