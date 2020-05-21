import React, { Component } from 'react';
import Pets from './components/Pets';
import './App.css';
import Aboutme from './components/Aboutme';

class App extends Component {
  state = {
    persons: [
      {name: "Dean", age: 19},
      {name: "Jay", age: 30},
      {name: "Connor", age: 21}
    ],
    animals: [
      {name: "Pete", species: "Duck"},
      {name: "Dave", species: "Pigeon"}
    ]
  }
  render() {
    const eachPerson = this.state.persons.map((student, index) => {
      return <Aboutme name = {student.name} age = {student.age} key = {index}/>
    })
    const eachAnimal = this.state.animals.map((pet, index) => {
      return <Pets name = {pet.name} species = {pet.species} key = {index}/>
    })
    return(
      <div>

         {eachPerson}
         {eachAnimal}
      </div>
    )
  }
}

export default App;
