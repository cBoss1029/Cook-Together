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
    this.setState({searchTerm: searchTerm});
    console.log(this.state.searchTerm);
  }

  searchRecipe=()=>{
    //do fetching stuff here
    this.setState({searchTerm: ''});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input onChange={this.getSearchTerm} type='text' value={this.state.searchTerm} placeholder="Enter Search"></input>
          <button onClick={this.searchRecipe}>Search</button>
        </header>
      </div>
    );
  }
}

export default App;
