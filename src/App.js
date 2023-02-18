import React from 'react';
import logo from './logo.svg';
import Greeting from './Greeting';
import { PeopleList } from "./PeopleList"
import './App.css';

const people = [{
  name: "John",
  age: 40,
  hairColor: "brown",
}, {
  name: "Helga",
  age: 25,
  hairColor: "red",
}, {
  name: "Dwayne",
  age: 55,
  hairColor: "blonde",
}];

function App() {
  let name = "YUAN";
  let url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: 'red', fontSize: '96px'}}>Big Red Text!</p>
        <Greeting name="YUAN" numberOfMessages={5} />
        <PeopleList people={people} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This message is from {name}.
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
