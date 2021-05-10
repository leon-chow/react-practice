import './App.css';
import React from 'react';

/*import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cats: 0,
      dogs: 0,
    }

    this.reset = this.reset.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement(pet) {
    if (pet === 'dogs') {
      this.setState(prevState => {
        return {
          dogs: prevState.dogs + 1,
        }
      });
    } else {
      this.setState(prevState => {
        return {
          cats: prevState.cats + 1,
        }
      });
    }
  }

  reset() {
    console.log("reset");
    this.setState({cats: 0, dogs: 0}); 
  }

  render() {
    return (
      <div className="App">
        <div className="header">
            <h1> Cats and Dogs Voting App </h1>
        </div>
        <div className="body">
          <button onClick={() => this.onIncrement('cats')}> Cats </button>
          <button onClick={() => this.onIncrement('dogs')}> Dogs </button>
          <button onClick={() => this.reset()}> Reset </button>
        </div>
        <div className="footer">
          <h1> Cats - {this.state.cats} | Dogs - {this.state.dogs} </h1>
        </div> 
      </div>
      /*<div className="App">
        <Header />
        <Body votes={this.state}/>
        <Footer votes={this.state}/>
      </div>*/

    );
  }
}

export default App;
