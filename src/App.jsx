import { Component } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      },
      () => {
        console.log(this.state);
      }))
  }

  render () {
    return (
      <>
        {
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>;
          })
        }
      </>
    )
  }
}

export default App
