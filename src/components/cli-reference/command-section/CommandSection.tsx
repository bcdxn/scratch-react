import React from "react";
import "./CommandSection.css";
import { Command } from "../../../OpenCli";
import Markdown from "react-markdown";

interface CommandSectionProps {
  command: Command;
  first: boolean;
}

const CommandSection: React.FC<CommandSectionProps> = ({ command, first }) => {
  return (
    <section
      className="command-section"
      id={first ? "FirstCommand" : command.line}
    >
      <a
        href={"#" + command.name?.replace(/\s+/g, "-")}
        id={command.name?.replace(/\s+/g, "-")}
      >
        <h1 className="command-line">{command.line}</h1>
      </a>
      <div className="command-content">
        <div className="command-resource">
          {command.summary && <Markdown>{command.summary}</Markdown>}
          {command.description && <Markdown>{command.description}</Markdown>}
        </div>
        <div className="command-example"></div>
      </div>
    </section>
  );
};

export default CommandSection;
