import React from "react";
import { CommandTrieNode } from "../../../../OpenCli";

interface CommandListProps {
  commandNode?: CommandTrieNode;
}

const CommandList: React.FC<CommandListProps> = (props) => {
  if (props.commandNode?.commands.length) {
    return (
      <ul className="command-group">
        <li className="command">
          <span className="command-name">
            {props.commandNode.command.leafName}
          </span>
          {props.commandNode.commands?.map((node) => (
            <CommandList commandNode={node} />
          ))}
        </li>
      </ul>
    );
  }

  return (
    <li className="command">
      <span className="command-name">
        {props.commandNode?.command.leafName}
      </span>
    </li>
  );
};

export default CommandList;
