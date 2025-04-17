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

        <h2>Introduction</h2>

        <div className="nav-break"></div>

        <h2>Install</h2>
        <ul className="installation-methods">
          <li>go install</li>
          <li>homebrew</li>
          <li>binary</li>
        </ul>

        <div className="nav-break"></div>

        <h2>Commands</h2>
        <ul className="command-group">
          <li className="command">
            <span className="command-name">ocli</span>
            <ul className="command-group">
              <li className="command">
                <span className="command-name">generate</span>
                <ul className="command-group">
                  <li className="command">
                    <span className="command-name">docs</span>
                  </li>
                  <li className="command">
                    <span className="command-name">code</span>
                  </li>
                </ul>
              </li>
              <li className="command">
                <span className="command-name">specification</span>
                <ul className="command-group">
                  <li className="command">
                    <span className="command-name">check</span>
                  </li>
                  <li className="command">
                    <span className="command-name">versions</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CliReference;
