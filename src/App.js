import './App.css';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cats: 0,
      dogs: 0,
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer votes={this.state}/>
      </div>
    );
  }
}

export default App;
