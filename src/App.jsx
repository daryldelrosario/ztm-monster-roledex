import { Component } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <>
        <img src={viteLogo} className="logo" alt="vite logo" />
        <h1>Learning Class Components</h1>
        <div className="card">
          <p>Hello World! My name is Daryl!</p>
          <button>Change Name</button>
        </div>
      </>
    )
  }
}

export default App
