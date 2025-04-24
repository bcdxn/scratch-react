import React from "react";
import "./SideNav.css";
import Switch from "../../switch/Switch";
import { Theme } from "../../../Theme";
import { OpenCliDocument } from "../../../OpenCli";
import CommandList from "./command-list/CommandList";

interface CliReferenceProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  doc: OpenCliDocument;
}

const CliReference: React.FC<CliReferenceProps> = (props) => {
  // Create a handler for the toggling the switch
  function toggleSwitch(val: boolean) {
    if (val) {
      props.changeTheme(Theme.DARK);
    } else {
      props.changeTheme(Theme.LIGHT);
    }
  }

  return (
    <>
      <div className="side-nav">
        <div className="header">
          <h1>{props.doc.info.title}</h1>
          <Switch value={props.theme === Theme.DARK} onChange={toggleSwitch} />
        </div>

        <h2>Introduction</h2>

        <div className="nav-break"></div>

        <h2>Install</h2>
        <ul className="installation-methods">
          {props.doc.install?.map((installMethod) => (
            <li>{installMethod.name}</li>
          ))}
        </ul>

        <div className="nav-break"></div>

        <h2>Commands</h2>
        <CommandList commandNode={props.doc.commandTrie?.root} />
      </div>
    </>
  );
};

export default CliReference;
