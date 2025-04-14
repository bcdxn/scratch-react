import {SunIcon} from '@primer/octicons-react'
import {MoonIcon} from '@primer/octicons-react'

import "./Switch.css";

interface SwitchProps {
  value: boolean
  onChange?: (value: boolean)=>void
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const toggle = () => {
    if (props.onChange) {
      props.onChange(!props.value);
    }
  }

  return (
    <>
      <button type="button" className="switch" onClick={toggle}>
        <div className="track"></div>
        <div className={props.value ? "knob on" : "knob off"}>
          {getKnobIcon(props.value)}
        </div>
      </button>
    </>
  )
};

function getKnobIcon(value: boolean) {
  if (value) {
    return <MoonIcon verticalAlign="middle" size={12} className="icon" />;
  } else {
    return <SunIcon verticalAlign="middle" size={12} className="icon" />;
  }
}

export default Switch