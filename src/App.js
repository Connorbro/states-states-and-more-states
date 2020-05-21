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
    ],
    digits: [1, 2, 3, 4]
  }
  
  addNumber = (number) => {
    this.setState({
      digits: [... this.state.digits, number]
    })
  }

  render() {
    const eachPerson = this.state.persons.map((student, index) => {
      return <Aboutme name = {student.name} age = {student.age} key = {index}/>
    })
    const eachAnimal = this.state.animals.map((pet, index) => {
      return <Pets name = {pet.name} species = {pet.species} key = {index}/>
    })
    const eachNumber = this.state.digits.map((singleNumber, index)=> {
      return <li key={index}>{singleNumber}</li>
    })
    return(
      <div>

         {eachPerson}
         {eachAnimal}
         <ul>{eachNumber}</ul>
        {/* <input type = "number" onChange={this.giveMeMyNumber} value={this.state.currentNumber} /> */}
        <button onClick={()=> this.addNumber(10)}></button>
      </div>
    )
  }
}

export default App;
