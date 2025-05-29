import React from "react";
import { CommandTrieNode } from "../../../../OpenCli";
import { v4 } from "uuid";

interface CommandListProps {
  commandNode?: CommandTrieNode;
}

const CommandList: React.FC<CommandListProps> = (props) => {
  return (
    <ul className="command-group">
      <li
        className="command"
        key={props.commandNode?.command.line}
        id={props.commandNode?.command.line}
      >
        <span className="command-name">
          {props.commandNode?.command.leafName}
        </span>
        {props.commandNode?.commands?.map((node) => (
          <CommandList commandNode={node} key={node?.command.line} />
        ))}
      </li>
    </ul>
  );
};

export default CommandList;
