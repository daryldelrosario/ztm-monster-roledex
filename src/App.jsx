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
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters' 
          onChange={(e) => {
            console.log(e.target.value);

            const searchString = e.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            })
          }}
        />
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </>
    )
  }
}

export default App
