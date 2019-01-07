import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UseShowMore from 'react-hooks-show-more-text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UseShowMore
            maxChar={20}
            text={"Mollit nulla cillum occaecat deserunt in anim ullamco est quis magna labore deserunt. Ipsum aliqua nulla fugiat enim irure duis id exercitation. Ut sit deserunt mollit incididunt tempor do voluptate dolor ullamco occaecat. Mollit et do occaecat sint officia commodo reprehenderit quis sint amet proident sint laboris. Ex voluptate consectetur laboris magna incididunt ea elit do veniam enim deserunt. Voluptate duis nulla officia mollit culpa dolore. Enim sint minim commodo esse sint nulla."}
          />
        </header>
      </div>
    );
  }
}

export default App;
