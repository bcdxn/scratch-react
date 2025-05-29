import React, { useEffect } from "react";
import "./CommandList.css";
import CommandSection from "../command-section/CommandSection";
import { OpenCliDocument, Command, CommandTrieNode } from "../../../OpenCli";

interface CommandListProps {
  doc: OpenCliDocument;
}

const CommandList: React.FC<CommandListProps> = (props) => {
  useEffect(() => {
    const hash = window.location.hash;
    console.log("use effect invoked", hash.replace(/^#/, ""));

    // if (hash) {
    //   console.log("hash existed");
    //   const elem = document.getElementById(hash);
    //   console.log(elem);
    //   elem?.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
  });

  const commands = flattenCommandList(props.doc);
  const sections = commands.map((command, index) => (
    <CommandSection command={command} first={index == 0} key={command.line} />
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
