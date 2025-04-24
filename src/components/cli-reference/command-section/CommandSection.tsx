import React from "react";
import "./CommandSection.css";
import CommandMain from "./command-main/CommandMain";

interface CommandSectionProps {}

const CommandSection: React.FC<CommandSectionProps> = (props) => {
  return (
    <section className="command-section">
      <CommandMain />
    </section>
  );
};

export default CommandSection;
