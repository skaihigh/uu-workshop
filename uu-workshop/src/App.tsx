import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WcagViewer from './Wcag/WcagViewer'
import { Colors, Focus, Font, Input, TabOrder } from './components'

function App(): JSX.Element {
  return (
    <div className="App">
      {import.meta.env.MODE === 'development' && <WcagViewer />}
      <div>
        <h2></h2>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Wcag</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Colors />
      <Font />
      <TabOrder />
      <Focus />
      <Input />
    </div>
  )
}

export default App
