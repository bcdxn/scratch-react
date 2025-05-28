import React from "react";
import "./CommandSection.css";
import { Command } from "../../../OpenCli";
import Markdown from "react-markdown";

interface CommandSectionProps {
  command: Command;
}

const CommandSection: React.FC<CommandSectionProps> = ({ command }) => {
  return (
    <section className="command-section">
      <h1 className="command-line">{command.line}</h1>
      <div className="command-content">
        <div className="command-resource">
          {command.summary && (
            <p>
              <Markdown>{command.summary}</Markdown>
            </p>
          )}
          {command.description && (
            <p>
              <Markdown>{command.description}</Markdown>
            </p>
          )}
        </div>
        <div className="command-example"></div>
      </div>
    </section>
  );
};

export default CommandSection;
