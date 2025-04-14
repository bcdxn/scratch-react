import React, { useState } from "react";
import Switch from "../switch/Switch";
import "./CliReference.css"

const CliReference: React.FC<{}> = () => {
  const [theme, setTheme] = useState(osThemePreference());

  console.log(theme)

  function switchTheme(value: boolean) {
    if (value) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }

  return (
    <>
      <div className="cli-reference" data-theme={theme === Theme.DARK ? "dark" : "light"}>
        <div className="spacing">
          <Switch value={theme === Theme.DARK} onChange={switchTheme}/>
        </div>
      </div>
    </>
  )
};

export default CliReference;

function osThemePreference(): Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.DARK;
  } else {
    return Theme.LIGHT;
  }
}

enum Theme {
  LIGHT,
  DARK,
}