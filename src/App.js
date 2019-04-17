import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      searchTerm: '',
    }
  }

  getSearchTerm=(e)=>{
    const searchTerm = e.target.value;
    this.setState({searchTerm: searchTerm})
  }

  searchRecipe=()=>{
    //do fetching stuff here
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type='text' placeholder="Enter type of recipe"></input>
          <button onClick={this.getSearchTerm()}>Search</button>
        </header>
      </div>
    );
  }
}

export default App;
