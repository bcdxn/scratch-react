import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Switch from './switch/Switch'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="spacing">
      <Switch value={false} onChange={switchTheme}/>
    </div>
  </StrictMode>,
)

function switchTheme(value: boolean) {
  if (value) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }    
}