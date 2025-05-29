import React from "react";
import "./CommandSection.css";
import Markdown from "react-markdown";
import { OpenCliDocument } from "../../../OpenCli";

interface IntroSectionProps {
  doc: OpenCliDocument;
}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  return (
    <section className="command-section">
      <h1>{props.doc.info.title}</h1>
      <div className="command-content">
        <div className="command-resource">
          {props.doc.info.summary && (
            <Markdown>{props.doc.info.summary}</Markdown>
          )}
          {props.doc.info.description && (
            <Markdown>{props.doc.info.description}</Markdown>
          )}
        </div>
        <div className="command-example">
          {props.doc.info.contact?.name && <h2>Contacts</h2>}
          {props.doc.info.contact?.name && <p>{props.doc.info.contact.name}</p>}
          {props.doc.info.contact?.url && (
            <a href={props.doc.info.contact.url}>
              {props.doc.info.contact.url}
            </a>
          )}
          {props.doc.info.license?.name && <h2>License</h2>}
          {props.doc.info.license?.name && props.doc.info.license?.url && (
            <a href={props.doc.info.license.url}>
              {props.doc.info.license.name}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
