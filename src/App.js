import React from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Logo from 'components/logo.js'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <p>
          An example Bulma button:
        </p>
        <Button color='primary'>Press Me!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
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
