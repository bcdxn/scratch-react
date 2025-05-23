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
      <div className="command-resource">
        <h1>{props.doc.info.title}</h1>
        {props.doc.info.summary && (
          <p>
            <Markdown>{props.doc.info.summary}</Markdown>
          </p>
        )}
        {props.doc.info.description && (
          <p>
            <Markdown>{props.doc.info.description}</Markdown>
          </p>
        )}
      </div>
      <div className="command-example">
        <div className="info-spacer"></div>
        {props.doc.info.contact?.name && <h2>Contacts</h2>}
        {props.doc.info.contact?.name && <p>{props.doc.info.contact.name}</p>}
        {props.doc.info.contact?.url && (
          <a href={props.doc.info.contact.url}>{props.doc.info.contact.url}</a>
        )}
        {props.doc.info.license?.name && <h2>License</h2>}
        {props.doc.info.license?.name && props.doc.info.license?.url && (
          <a href={props.doc.info.license.url}>{props.doc.info.license.name}</a>
        )}
      </div>
    </section>
  );
};

export default IntroSection;
