import React, { useState } from "react";
import "./CliReference.css";
import SideNav from "../side-nav/SideNav";
import { Theme } from "../../Theme";
import { OpenCliDocument } from "../../OpenCli";

const doc: OpenCliDocument = {
  Info: {
    Title: "OpenCLI CLI",
  },
};

const CliReference: React.FC<{}> = () => {
  const [theme, setTheme] = useState(osThemePreference());

  return (
    <>
      <div
        className="cli-reference"
        data-theme={theme === Theme.DARK ? "dark" : "light"}
      >
        <div className="nav">
          <SideNav theme={theme} changeTheme={setTheme} doc={doc} />
        </div>
      </div>
    </>
  );
};

export default CliReference;

function osThemePreference(): Theme {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return Theme.DARK;
  } else {
    return Theme.LIGHT;
  }
}
