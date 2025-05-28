import React from "react";
import "./CommandList.css";
import CommandSection from "../command-section/CommandSection";
import { OpenCliDocument, Command, CommandTrieNode } from "../../../OpenCli";

interface CommandListProps {
  doc: OpenCliDocument;
}

const CommandList: React.FC<CommandListProps> = (props) => {
  const commands = flattenCommandList(props.doc);
  const sections = commands.map((command) => (
    <CommandSection command={command} />
  ));

  return <>{sections}</>;
};

function flattenCommandList(doc: OpenCliDocument): Command[] {
  const commands: Command[] = [];

  function helper(node?: CommandTrieNode) {
    if (node) {
      if (!node.command.group) {
        commands.push(node.command);
      }
      node.commands.forEach(helper);
    }
  }

  helper(doc.commandTrie?.root);

  return commands;
}

export default CommandList;
