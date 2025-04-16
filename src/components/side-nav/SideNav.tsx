import React from "react";
import "./SideNav.css";
import Switch from "../switch/Switch";
import { Theme } from "../../Theme";
import { OpenCliDocument } from "../../OpenCli";

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
          <h1>{props.doc.Info.Title}</h1>
          <Switch value={props.theme === Theme.DARK} onChange={toggleSwitch} />
        </div>
      </div>
    </>
  );
};

export default CliReference;
