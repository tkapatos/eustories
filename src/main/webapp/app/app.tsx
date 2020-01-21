import React, { Component } from 'react';
import HomeComponent from "app/components/Home/HomeComponent";
import HeaderComponent from "app/components/Header/HeaderComponent";

class App extends Component {
  state = {
    username:'hi'
  }
  render () {
    return (
      <div>
        <HeaderComponent  username={this.state.username}/>
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
