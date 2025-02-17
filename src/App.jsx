import { Component } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Daryl',
      company: 'ZTM'
    }
  }

  render () {
    return (
      <>
        <img src={viteLogo} className="logo" alt="vite logo" />
        <h1>Learning Class Components</h1>
        <div className="card">
          <p>Hello World, my name is {this.state.name}!</p>
          <p>I work at {this.state.company} ...</p>
          <button 
            onClick={() => {
              this.setState({ 
                name: 'Clark Kent',
                company: 'CTO of $MAYBE'
              });
            }}
          >
            Change Name
          </button>
        </div>
      </>
    )
  }
}

export default App
